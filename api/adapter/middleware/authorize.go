package middleware

import (
	"net/http"

	constant "github.com/Daaaai0809/kabos-dev.com/constants"
	"github.com/Daaaai0809/kabos-dev.com/usecase"
	"github.com/labstack/echo/v4"
)

const (
	UNAUTHORIZED_MESSAGE = "Unauthorized"
)

type AuthMiddleware struct {
	authInteractor usecase.IAuthInteractor
}

func NewAuthMiddleware(authInteractor usecase.IAuthInteractor) *AuthMiddleware {
	return &AuthMiddleware{
		authInteractor: authInteractor,
	}
}

func (m *AuthMiddleware) Authorize(next echo.HandlerFunc) echo.HandlerFunc {
	return func(c echo.Context) error {
		cookie, err := c.Request().Cookie(constant.COOKIE_NAME)
		if err != nil {
			return c.JSON(http.StatusUnauthorized, UNAUTHORIZED_MESSAGE)
		}

		token := cookie.Value

		if err := m.authInteractor.CheckAccessToken(c.Request().Context(), token); err != nil {
			return c.JSON(http.StatusUnauthorized, UNAUTHORIZED_MESSAGE)
		}

		return next(c)
	}
}
