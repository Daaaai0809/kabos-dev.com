package handler

import (
	"net/http"
	"strconv"

	"github.com/Daaaai0809/kabos-dev.com/adapter/request/blog"
	"github.com/Daaaai0809/kabos-dev.com/constants"
	"github.com/Daaaai0809/kabos-dev.com/domain/entity"
	"github.com/Daaaai0809/kabos-dev.com/usecase"
	"github.com/labstack/echo/v4"
)

type BlogHandler struct {
	blogInteractor usecase.IBlogInteractor
}

func NewBlogHandler(group *echo.Group, adminGroup *echo.Group, blogInteractor usecase.IBlogInteractor) {
	handler := &BlogHandler{
		blogInteractor: blogInteractor,
	}

	group.GET("/", handler.GetAll)
	group.GET("/search", handler.GetSearchedBlog)
	group.GET("/:id", handler.GetByID)
	adminGroup.POST("/", handler.Create)
	adminGroup.PUT("/:id", handler.Update)
	adminGroup.DELETE("/:id", handler.Delete)
}

func (h *BlogHandler) GetAll(c echo.Context) error {
	blog, err := h.blogInteractor.GetAll(c.Request().Context())
	if err != nil {
		return c.String(http.StatusInternalServerError, constant.INTERNAL_SERVER_ERROR_MESSAGE)
	}

	return c.JSON(http.StatusOK, blog)
}

func (h *BlogHandler) GetSearchedBlog(c echo.Context) error {
	searchWord := c.QueryParam("searchWord")

	res, err := h.blogInteractor.GetSearchedBlog(c.Request().Context(), searchWord)
	if err != nil {
		return c.String(http.StatusInternalServerError, constant.INTERNAL_SERVER_ERROR_MESSAGE)
	}

	return c.JSON(http.StatusOK, res)
}

func (h *BlogHandler) GetByID(c echo.Context) error {
	id := c.Param("id")

	intID, err := strconv.Atoi(id)
	if err != nil {
		return c.String(http.StatusBadRequest, constant.BAD_REQUEST_MESSAGE)
	}

	res, err := h.blogInteractor.GetByID(c.Request().Context(), intID)
	if err != nil {
		return c.String(http.StatusInternalServerError, constant.INTERNAL_SERVER_ERROR_MESSAGE)
	}

	return c.JSON(http.StatusOK, res)
}

func (h *BlogHandler) Create(c echo.Context) error {
	var CreateBlogRequest = blog.CreateBlogRequest{}
	if err := c.Bind(&CreateBlogRequest); err != nil {
		return c.String(http.StatusBadRequest, constant.BAD_REQUEST_MESSAGE)
	}

	blog := &entity.Blog{
		Title:     CreateBlogRequest.Title,
		Content:   CreateBlogRequest.Content,
		Thumbnail: CreateBlogRequest.Thumbnail,
		URL:       CreateBlogRequest.URL,
	}

	res, err := h.blogInteractor.Create(c.Request().Context(), blog)
	if err != nil {
		return c.String(http.StatusInternalServerError, constant.INTERNAL_SERVER_ERROR_MESSAGE)
	}

	return c.JSON(http.StatusCreated, res)
}

func (h *BlogHandler) Update(c echo.Context) error {
	id := c.Param("id")
	
	intID, err := strconv.Atoi(id)
	if err != nil {
		return c.String(http.StatusBadRequest, constant.BAD_REQUEST_MESSAGE)
	}

	var UpdateBlogRequest = blog.UpdateBlogRequest{}
	if err := c.Bind(&UpdateBlogRequest); err != nil {
		return c.String(http.StatusBadRequest, constant.BAD_REQUEST_MESSAGE)
	}

	blog := &entity.Blog{
		ID:        intID,
		Title:     UpdateBlogRequest.Title,
		Content:   UpdateBlogRequest.Content,
		Thumbnail: UpdateBlogRequest.Thumbnail,
		URL:       UpdateBlogRequest.URL,
	}

	res, err := h.blogInteractor.Update(c.Request().Context(), blog)
	if err != nil {
		return c.String(http.StatusInternalServerError, constant.INTERNAL_SERVER_ERROR_MESSAGE)
	}

	return c.JSON(http.StatusOK, res)
}

func (h *BlogHandler) Delete(c echo.Context) error {
	id := c.Param("id")

	intID, err := strconv.Atoi(id)
	if err != nil {
		return c.String(http.StatusBadRequest, constant.BAD_REQUEST_MESSAGE)
	}

	if err := h.blogInteractor.Delete(c.Request().Context(), intID); err != nil {
		return c.String(http.StatusInternalServerError, constant.INTERNAL_SERVER_ERROR_MESSAGE)
	}

	return c.JSON(http.StatusOK, constant.SUCCESS_MESSAGE)
}
