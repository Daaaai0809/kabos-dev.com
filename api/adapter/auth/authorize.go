package auth

import (
	"net/http"

	"github.com/Daaaai0809/kabos-dev.com/usecase"
	"github.com/labstack/echo/v4"
)

const (
	COOKIE_NAME          = "access_token"
	UNAUTHORIZED_MESSAGE = "Unauthorized"
)

type AuthGateway struct {
	authInteractor usecase.IAuthInteractor
}

func NewAuthGateway(authInteractor usecase.IAuthInteractor) *AuthGateway {
	return &AuthGateway{
		authInteractor: authInteractor,
	}
}

func (g *AuthGateway) Authorize(next echo.HandlerFunc) echo.HandlerFunc {
	return func(c echo.Context) error {
		cookie, err := c.Request().Cookie(COOKIE_NAME)
		if err != nil {
			return c.JSON(http.StatusUnauthorized, UNAUTHORIZED_MESSAGE)
		}

		token := cookie.Value

		if err := g.authInteractor.CheckAccessToken(c.Request().Context(), token); err != nil {
			return c.String(http.StatusUnauthorized, UNAUTHORIZED_MESSAGE)
		}

		return next(c)
	}
}
