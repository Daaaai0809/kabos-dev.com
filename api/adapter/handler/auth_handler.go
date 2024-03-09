package handler

import (
	"net/http"

	"github.com/Daaaai0809/kabos-dev.com/adapter/request/auth"
	"github.com/Daaaai0809/kabos-dev.com/config"
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
	adminGroup.GET("/logout", handler.Logout)
	adminGroup.GET("/check", handler.Check)
}

func (h *AuthHandler) Login(c echo.Context) error {
	var LoginRequest = auth.LoginRequest{}
	err := c.Bind(&LoginRequest)
	if err != nil {
		return c.String(http.StatusBadRequest, constant.BAD_REQUEST_MESSAGE)
	}

	if err := h.authInteractor.CheckPassword(c.Request().Context(), LoginRequest.Password); err != nil {
		return c.String(http.StatusInternalServerError, constant.INTERNAL_SERVER_ERROR_MESSAGE)
	}

	token, err := h.authInteractor.GenrateAccessToken(c.Request().Context())
	if err != nil {
		return c.String(http.StatusInternalServerError, constant.INTERNAL_SERVER_ERROR_MESSAGE)
	}

	tokenCookie := h.authInteractor.SetTokenToCookie(c.Request().Context(), token, config.IsDev)

	c.SetCookie(tokenCookie)

	return c.NoContent(http.StatusOK)
}

func (h *AuthHandler) Logout(c echo.Context) error {
	tokenCookie := h.authInteractor.DeleteTokenFromCookie(c.Request().Context(), config.IsDev)
	c.SetCookie(tokenCookie)

	return c.NoContent(http.StatusOK)
}

func (h *AuthHandler) Check(c echo.Context) error {
	tokenCookie, err := c.Cookie(constant.COOKIE_NAME)
	if err != nil {
		return c.String(http.StatusUnauthorized, constant.UNAUTHENTICATED_MESSAGE)
	}

	if err := h.authInteractor.CheckAccessToken(c.Request().Context(), tokenCookie.Value); err != nil {
		return c.String(http.StatusUnauthorized, constant.UNAUTHORIZED_MESSAGE)
	}

	return c.NoContent(http.StatusOK)
}
