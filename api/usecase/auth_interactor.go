package usecase

import (
	"context"
	"errors"
	"strconv"
	"time"

	"github.com/Daaaai0809/kabos-dev.com/config"
	"github.com/Daaaai0809/kabos-dev.com/usecase/presenter"
	jwt "github.com/dgrijalva/jwt-go"
	"golang.org/x/crypto/bcrypt"
)

const (
	COOKIE_EXPIRE         = 3 * time.Hour
	INVALID_TOKEN_MESSAGE = "invalid token"
	TOKEN_EXPIRE          = 3 * time.Hour
)

type IAuthInteractor interface {
	CheckAccessToken(ctx context.Context, token string) error
	CheckPassword(ctx context.Context, password string) error
	GenrateAccessToken() (*presenter.LoginResponse, error)
}

type AuthInteractor struct {
	authPresenter presenter.IAuthPresenter
}

func NewAuthInteractor(authPresenter presenter.IAuthPresenter) IAuthInteractor {
	return &AuthInteractor{
		authPresenter: authPresenter,
	}
}

func (i *AuthInteractor) CheckAccessToken(ctx context.Context, token string) error {
	parsedToken, err := jwt.Parse(token, func(token *jwt.Token) (interface{}, error) {
		if token.Method != jwt.SigningMethodHS256 {
			return nil, errors.New(INVALID_TOKEN_MESSAGE)
		}

		return []byte(config.JWT_SECRET), nil
	})
	if err != nil {
		return err
	}

	claims := parsedToken.Claims.(jwt.MapClaims)
	if claims["iss"] != config.ISS {
		return errors.New(INVALID_TOKEN_MESSAGE)
	}

	exp := int64(claims["exp"].(float64))
	if exp < time.Now().Unix() {
		return errors.New(INVALID_TOKEN_MESSAGE)
	}

	return nil
}

func (i *AuthInteractor) CheckPassword(ctx context.Context, password string) error {
	cost, err := strconv.Atoi(config.HASH_COST)
	if err != nil {
		return err
	}

	_password, err := bcrypt.GenerateFromPassword([]byte(config.PASSWORD), cost)
	if err != nil {
		return err
	}

	if err := bcrypt.CompareHashAndPassword(_password, []byte(password)); err != nil {
		return err
	}

	return nil
}

func (i *AuthInteractor) GenrateAccessToken() (*presenter.LoginResponse, error) {
	token := jwt.New(jwt.SigningMethodHS256)

	claims := token.Claims.(jwt.MapClaims)
	claims["iss"] = "kabos-dev.com"
	claims["iat"] = time.Now().Unix()
	claims["exp"] = time.Now().Add(TOKEN_EXPIRE).Unix()

	tokenString, err := token.SignedString([]byte(config.JWT_SECRET))
	if err != nil {
		return &presenter.LoginResponse{}, err
	}

	return i.authPresenter.GenerateLoginResponse(tokenString), nil
}
