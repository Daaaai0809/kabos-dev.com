package handler

import (
	"net/http"
	"strings"

	"github.com/Daaaai0809/kabos-dev.com/adapter/request/auth"
	"github.com/Daaaai0809/kabos-dev.com/constants"
	"github.com/Daaaai0809/kabos-dev.com/usecase"
	"github.com/labstack/echo/v4"
)

type AuthHandler struct {
	authInteractor usecase.IAuthInteractor
}

func NewAuthHandler(group *echo.Group, adminGroup *echo.Group, authInteractor usecase.IAuthInteractor) {
	handler := &AuthHandler{
		authInteractor: authInteractor,
	}

	group.POST("/login", handler.Login)
	group.GET("/check", handler.Check)
}

func (h *AuthHandler) Login(c echo.Context) error {
	var LoginRequest = auth.LoginRequest{}
	err := c.Bind(&LoginRequest)
	if err != nil {
		return c.String(http.StatusBadRequest, constant.BAD_REQUEST_MESSAGE)
	}

	if err := h.authInteractor.CheckPassword(c.Request().Context(), LoginRequest.Password); err != nil {
		return c.String(http.StatusUnauthorized, constant.INTERNAL_SERVER_ERROR_MESSAGE)
	}

	res, err := h.authInteractor.GenrateAccessToken()
	if err != nil {
		return c.String(http.StatusInternalServerError, constant.INTERNAL_SERVER_ERROR_MESSAGE)
	}

	return c.JSON(http.StatusOK, res)
}

func (h *AuthHandler) Check(c echo.Context) error {
	authHeader := c.Request().Header.Get("Authorization")
	if authHeader == "" {
		return c.String(http.StatusUnauthorized, constant.UNAUTHORIZED_MESSAGE)
	}

	token := strings.TrimPrefix(authHeader, "Bearer ")

	if err := h.authInteractor.CheckAccessToken(c.Request().Context(), token); err != nil {
		return c.String(http.StatusUnauthorized, constant.UNAUTHORIZED_MESSAGE)
	}

	return c.NoContent(http.StatusOK)
}
