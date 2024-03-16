package main

import (
	"net/http"

	"github.com/uptrace/bun"
	"github.com/uptrace/bun/dialect/mysqldialect"

	"github.com/Daaaai0809/kabos-dev.com/adapter/handler"
	auth "github.com/Daaaai0809/kabos-dev.com/adapter/middleware"
	"github.com/Daaaai0809/kabos-dev.com/adapter/presenter"
	"github.com/Daaaai0809/kabos-dev.com/config"
	"github.com/Daaaai0809/kabos-dev.com/infra/mysql"
	"github.com/Daaaai0809/kabos-dev.com/models"
	"github.com/Daaaai0809/kabos-dev.com/usecase"
	"github.com/labstack/echo/v4"
	middleware "github.com/labstack/echo/v4/middleware"
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

	authPresetner := presenter.NewAuthPresenter()
	authInteractor := usecase.NewAuthInteractor(authPresetner)
	authMiddleware := auth.NewAuthMiddleware(authInteractor)
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

	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{config.ACCESS_CONTROL_ALLOW_ORIGIN},
		AllowHeaders: []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept},
		AllowCredentials: true,
		AllowMethods: []string{http.MethodGet, http.MethodPut, http.MethodPost, http.MethodDelete, http.MethodHead, http.MethodOptions},
	}))

	apiGroup := e.Group("/api")
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
