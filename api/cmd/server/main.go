package main

import (
	"net/http"

	"github.com/uptrace/bun"
	"github.com/uptrace/bun/dialect/mysqldialect"

	"github.com/Daaaai0809/kabos-dev.com/adapter/middleware"
	"github.com/Daaaai0809/kabos-dev.com/adapter/handler"
	"github.com/Daaaai0809/kabos-dev.com/adapter/presenter"
	"github.com/Daaaai0809/kabos-dev.com/infra/mysql"
	"github.com/Daaaai0809/kabos-dev.com/models"
	"github.com/Daaaai0809/kabos-dev.com/usecase"
	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()

	db, err := mysql.ConnectDB(nil)
	if err != nil {
		panic(err)
	}

	bunDB := bun.NewDB(db, mysqldialect.New())
	bunDB.RegisterModel((*models.BlogTags)(nil))

	defer bunDB.Close()

	authInteractor := usecase.NewAuthInteractor()
	authMiddleware := middleware.NewAuthMiddleware(authInteractor)
	corsMiddleware := middleware.NewCorsMiddleware()
	blogRepository := mysql.NewBlogRepository(bunDB)
	tagRepository := mysql.NewTagRepository(bunDB)
	productRepository := mysql.NewProductRepository(bunDB)
	blogTagsRepository := mysql.NewBlogTagsRepository(bunDB)
	blogPresenter := presenter.NewBlogPresenter()
	tagPresenter := presenter.NewTagPresenter()
	productPresenter := presenter.NewProductPresenter()
	blogInteractor := usecase.NewBlogInteractor(blogRepository, blogTagsRepository, blogPresenter)
	tagInteractor := usecase.NewTagInteractor(tagRepository, blogTagsRepository, tagPresenter)
	productInteractor := usecase.NewProductInteractor(productRepository, productPresenter)

	e.Use(corsMiddleware.CorsSetting)

	apiGroup := e.Group("/api")
	// CORS setting
	apiGroup.Use(func(next echo.HandlerFunc) echo.HandlerFunc {
		return func(c echo.Context) error {
			c.Response().Header().Set("Access-Control-Allow-Origin", config.ACCESS_CONTROL_ALLOW_ORIGIN)
			c.Response().Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
			c.Response().Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
			c.Response().Header().Set("Access-Control-Allow-Credentials", "true")
			if config.IsDev {
				c.Response().Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
			}
			return next(c)
		}
	})
	adminGroup := apiGroup.Group("/admin")
	adminGroup.Use(authMiddleware.Authorize)
	apiGroup.GET("/health", authMiddleware.Authorize(func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, World!")
	}))
	authGroup := apiGroup.Group("/auth")
	adminAuthGroup := adminGroup.Group("/auth")
	handler.NewAuthHandler(authGroup, adminAuthGroup, authInteractor)

	blogGroup := apiGroup.Group("/blog")
	adminBlogGroup := adminGroup.Group("/blog")
	handler.NewBlogHandler(blogGroup, adminBlogGroup, blogInteractor)

	tagGroup := apiGroup.Group("/tag")
	adminTagGroup := adminGroup.Group("/tag")
	handler.NewTagHandler(tagGroup, adminTagGroup, tagInteractor)

	productGroup := apiGroup.Group("/product")
	adminProductGroup := adminGroup.Group("/product")
	handler.NewProductHandler(productGroup, adminProductGroup, productInteractor)

	e.Start(":8080")
}
