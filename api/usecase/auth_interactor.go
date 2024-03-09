package usecase

import (
	"context"
	"errors"
	"net/http"
	"strconv"
	"time"

	"github.com/Daaaai0809/kabos-dev.com/config"
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
	GenrateAccessToken(ctx context.Context) (string, error)
	SetTokenToCookie(ctx context.Context, token string, isDev bool) *http.Cookie
	DeleteTokenFromCookie(ctx context.Context, isDev bool) *http.Cookie
}

type AuthInteractor struct {
}

func NewAuthInteractor() IAuthInteractor {
	return &AuthInteractor{}
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

func (i *AuthInteractor) GenrateAccessToken(ctx context.Context) (string, error) {
	token := jwt.New(jwt.SigningMethodHS256)

	claims := token.Claims.(jwt.MapClaims)
	claims["iss"] = "kabos-dev.com"
	claims["iat"] = time.Now().Unix()
	claims["exp"] = time.Now().Add(TOKEN_EXPIRE).Unix()

	tokenString, err := token.SignedString([]byte(config.JWT_SECRET))
	if err != nil {
		return "", err
	}

	return tokenString, nil
}

func (i *AuthInteractor) SetTokenToCookie(c context.Context, token string, isDev bool) *http.Cookie {
	cookie := new(http.Cookie)
	cookie.Name = "access_token"
	cookie.Value = token
	cookie.Path = "/"
	cookie.HttpOnly = true
	cookie.SameSite = http.SameSiteLaxMode
	cookie.Secure = !isDev
	cookie.Expires = time.Now().Add(COOKIE_EXPIRE)

	return cookie
}

func (i *AuthInteractor) DeleteTokenFromCookie(c context.Context, isDev bool) *http.Cookie {
	cookie := new(http.Cookie)
	cookie.Name = "access_token"
	cookie.Value = ""
	cookie.Path = "/"
	cookie.HttpOnly = true
	cookie.SameSite = http.SameSiteNoneMode
	cookie.Secure = !isDev
	cookie.Expires = time.Now().Add(-1 * time.Hour)

	return cookie
}
