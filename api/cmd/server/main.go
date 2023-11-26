package main

import (
	"net/http"

	"github.com/Daaaai0809/kabos-dev.com/adapter/auth"
	"github.com/Daaaai0809/kabos-dev.com/adapter/handler"
	"github.com/Daaaai0809/kabos-dev.com/usecase"
	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()

	authInteractor := usecase.NewAuthInteractor()
	authGateway := auth.NewAuthGateway(authInteractor)

	apiGroup := e.Group("/api")
	apiGroup.GET("/", authGateway.Authorize(func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, World!")
	}))
	authGroup := apiGroup.Group("/auth")
	handler.NewAuthHandler(authGroup, authInteractor)

	e.Start(":8000")
}
