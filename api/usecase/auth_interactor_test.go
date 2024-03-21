package usecase_test

import (
	"context"
	"errors"
	"testing"
	"time"

	"github.com/Daaaai0809/kabos-dev.com/config"
	"github.com/Daaaai0809/kabos-dev.com/usecase"
	"github.com/Daaaai0809/kabos-dev.com/usecase/presenter"
	"github.com/dgrijalva/jwt-go"
	"github.com/stretchr/testify/assert"
)

func Test_AuthInteractor_CheckAccessToken(t *testing.T) {
	ctx := context.Background()

	token, err := func() (string, error) {
		token := jwt.New(jwt.SigningMethodHS256)

		claims := token.Claims.(jwt.MapClaims)
		claims["iss"] = "kabos-dev.com"
		claims["iat"] = time.Now().Unix()
		claims["exp"] = time.Now().Add(usecase.TOKEN_EXPIRE).Unix()

		tokenString, err := token.SignedString([]byte(config.JWT_SECRET))
		if err != nil {
			return "", err
		}

		return tokenString, nil
	}()
	if err != nil {
		t.Fatal(err)
	}

	authPresenter := &MockAuthPresenter{}
	authInteractor := usecase.NewAuthInteractor(authPresenter)

	if err := authInteractor.CheckAccessToken(ctx, token); err != nil {
		t.Fatal(err)
	}

	if err := authInteractor.CheckAccessToken(ctx, "invalid token"); err == nil {
		t.Fatal("expected error")
	}
}

func Test_CheckPassword(t *testing.T) {
	ctx := context.Background()

	authPresenter := &MockAuthPresenter{}
	authInteractor := usecase.NewAuthInteractor(authPresenter)

	if err := authInteractor.CheckPassword(ctx, config.PASSWORD); err != nil {
		t.Fatal(err)
	}

	if err := authInteractor.CheckPassword(ctx, "invalid password"); err == nil {
		t.Fatal("expected error")
	}
}

func Test_GenrateAccessToken(t *testing.T) {
	authPresenter := &MockAuthPresenter{}
	authInteractor := usecase.NewAuthInteractor(authPresenter)

	token, err := authInteractor.GenrateAccessToken()
	if err != nil {
		t.Fatal(err)
	}

	parsedToken, err := jwt.Parse(token.AccessToken, func(token *jwt.Token) (interface{}, error) {
		if token.Method != jwt.SigningMethodHS256 {
			return nil, errors.New(usecase.INVALID_TOKEN_MESSAGE)
		}

		return []byte(config.JWT_SECRET), nil
	})
	if err != nil {
		t.Fatal(err)
	}

	claims := parsedToken.Claims.(jwt.MapClaims)

	assert.Equal(t, config.ISS, claims["iss"])
	assert.True(t, int64(claims["exp"].(float64)) > time.Now().Unix())
}

type MockAuthPresenter struct{}

func (m *MockAuthPresenter) GenerateLoginResponse(accessToken string) *presenter.LoginResponse {
	return &presenter.LoginResponse{
		AccessToken: accessToken,
	}
}
