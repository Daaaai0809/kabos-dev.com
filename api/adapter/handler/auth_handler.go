package handler

import (
	"net/http"

	"github.com/Daaaai0809/kabos-dev.com/config"
	"github.com/Daaaai0809/kabos-dev.com/adapter/request"
	"github.com/Daaaai0809/kabos-dev.com/usecase"
	"github.com/labstack/echo/v4"
)

const (
	LOGIN_SUCCESS_MESSAGE         = "Login Success"
	BAD_REQUEST_MESSAGE           = "Bad Request"
	INTERNAL_SERVER_ERROR_MESSAGE = "Internal Server Error"
)

type AuthHandler struct {
	authInteractor usecase.IAuthInteractor
}

func NewAuthHandler(group *echo.Group, authInteractor usecase.IAuthInteractor) {
	handler := &AuthHandler{
		authInteractor: authInteractor,
	}

	group.POST("/login", handler.Login)
}

func (h *AuthHandler) Login(c echo.Context) error {
	var LoginRequest = request.LoginRequest{}
	err := c.Bind(&LoginRequest)
	if err != nil {
		return c.String(http.StatusBadRequest, BAD_REQUEST_MESSAGE)
	}

	if err := h.authInteractor.CheckPassword(c.Request().Context(), LoginRequest.Password); err != nil {
		return c.String(http.StatusInternalServerError, INTERNAL_SERVER_ERROR_MESSAGE)
	}

	token, err := h.authInteractor.GenrateAccessToken(c.Request().Context())
	if err != nil {
		return c.String(http.StatusInternalServerError, INTERNAL_SERVER_ERROR_MESSAGE)
	}

	tokenCookie := h.authInteractor.SetTokenToCookie(c.Request().Context(), token, config.IsDev)

	c.SetCookie(tokenCookie)

	return c.JSON(http.StatusOK, LOGIN_SUCCESS_MESSAGE)
}
