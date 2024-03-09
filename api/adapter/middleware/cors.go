package middleware

import (
	"github.com/Daaaai0809/kabos-dev.com/config"
	"github.com/labstack/echo/v4"
)

type CorsMiddleware struct {}

func NewCorsMiddleware() *CorsMiddleware {
	return &CorsMiddleware{}
}

func (c *CorsMiddleware) CorsSetting(next echo.HandlerFunc) echo.HandlerFunc {
	return func(c echo.Context) error {
		c.Response().Header().Set("Access-Control-Allow-Origin", config.ACCESS_CONTROL_ALLOW_ORIGIN)
		c.Response().Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		c.Response().Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
		c.Response().Header().Set("Access-Control-Allow-Credentials", "true")
		if config.IsDev {
			c.Response().Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
		}
		return next(c)
	}
}
