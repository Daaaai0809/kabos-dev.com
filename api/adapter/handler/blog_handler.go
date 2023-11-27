package handler

import (
	"net/http"

	"github.com/Daaaai0809/kabos-dev.com/constant"
	"github.com/Daaaai0809/kabos-dev.com/request/blog"
	"github.com/Daaaai0809/kabos-dev.com/usecase"
	"github.com/labstack/echo/v4"
)

type BlogHandler struct {
	blogInteractor usecase.IBlogInteractor
}

func NewBlogHandler(group *echo.Group, blogInteractor usecase.IBlogInteractor) {
	handler := &BlogHandler{
		blogInteractor: blogInteractor,
	}

	group.GET("/blogs", handler.GetAll)
	group.GET("/blogs/search", handler.GetSearchedBlog)
	group.GET("/blogs/:id", handler.GetByID)
	group.POST("/blogs", handler.Create)
	group.PUT("/blogs/:id", handler.Update)
	group.DELETE("/blogs/:id", handler.Delete)
}

func (h *BlogHandler) GetAll(c echo.Context) error {
	blog, err := h.blogInteractor.GetAll(c.Request().Context())
	if err != nil {
		return c.String(http.StatusInternalServerError, constant.INTERNAL_SERVER_ERROR_MESSAGE)
	}

	return c.JSON(http.StatusOK, blog)
}

func (h *BlogHandler) GetSearchedBlog(c echo.Context) error {
	return nil
}

func (h *BlogHandler) GetByID(c echo.Context) error {
	return nil
}

func (h *BlogHandler) Create(c echo.Context) error {
	var CreateBlogRequest = blog.CreateBlogRequest{}
	if err := c.Bind(&CreateBlogRequest); err != nil {
		return c.String(http.StatusBadRequest, constant.BAD_REQUEST_MESSAGE)
	}

	return nil
}

func (h *BlogHandler) Update(c echo.Context) error {
	return nil
}

func (h *BlogHandler) Delete(c echo.Context) error {
	return nil
}
