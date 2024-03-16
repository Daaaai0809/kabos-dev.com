package middleware

import (
	"net/http"
	"strings"

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
		authHeader := c.Request().Header.Get("Authorization")
		if authHeader == "" {
			return c.JSON(http.StatusUnauthorized, UNAUTHORIZED_MESSAGE)
		}

		token := strings.TrimPrefix(authHeader, "Bearer ")

		if err := m.authInteractor.CheckAccessToken(c.Request().Context(), token); err != nil {
			return c.JSON(http.StatusUnauthorized, UNAUTHORIZED_MESSAGE)
		}

		return next(c)
	}
}
