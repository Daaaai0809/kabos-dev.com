package main

import (
	"github.com/Daaaai0809/kabos-dev.com/adapter/gateway"
	"github.com/Daaaai0809/kabos-dev.com/adapter/handler"
	"github.com/Daaaai0809/kabos-dev.com/usecase"
	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()

	authInteractor := usecase.NewAuthInteractor()
	authGateway := gateway.NewAuthGateway(authInteractor)

	apiGroup := e.Group("/api")
	apiGroup.GET("/", authGateway.Authorize(func(c echo.Context) error {
		return c.String(200, "Hello, World!")
	}))
	authGroup := apiGroup.Group("/auth")
	handler.NewAuthHandler(authGroup, authInteractor)

	e.Start(":8000")
}
