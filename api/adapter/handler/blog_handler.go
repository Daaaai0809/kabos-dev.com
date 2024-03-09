package handler

import (
	"log"
	"net/http"
	"strconv"

	"github.com/Daaaai0809/kabos-dev.com/adapter/request/blog"
	"github.com/Daaaai0809/kabos-dev.com/constants"
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
	searchWord := c.QueryParam("search_word")

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
	var createBlogRequest = blog.CreateBlogRequest{}
	if err := c.Bind(&createBlogRequest); err != nil {
		return c.String(http.StatusBadRequest, constant.BAD_REQUEST_MESSAGE)
	}

	blog, err := h.blogInteractor.GenerateBlogEntity(c.Request().Context(), 0, createBlogRequest.Title, createBlogRequest.Thumbnail, createBlogRequest.URL, createBlogRequest.PostedAt, createBlogRequest.TagIDs)
	if err != nil {
		log.Println(err)
		return c.String(http.StatusInternalServerError, constant.INTERNAL_SERVER_ERROR_MESSAGE)
	}

	res, err := h.blogInteractor.Create(c.Request().Context(), blog)
	if err != nil {
		log.Println(err)
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

	var updateBlogRequest = blog.UpdateBlogRequest{}
	if err := c.Bind(&updateBlogRequest); err != nil {
		return c.String(http.StatusBadRequest, constant.BAD_REQUEST_MESSAGE)
	}

	updateBlog, err := h.blogInteractor.GenerateBlogEntity(c.Request().Context(), intID, updateBlogRequest.Title, updateBlogRequest.Thumbnail, updateBlogRequest.URL, updateBlogRequest.PostedAt, updateBlogRequest.TagIDs)
	if err != nil {
		log.Println(err)
		return c.String(http.StatusInternalServerError, constant.INTERNAL_SERVER_ERROR_MESSAGE)
	}

	originBlog, err := h.blogInteractor.GetOriginBlog(c.Request().Context(), intID)
	if err != nil {
		log.Println(err)
		return c.String(http.StatusInternalServerError, constant.INTERNAL_SERVER_ERROR_MESSAGE)
	}

	blog := h.blogInteractor.FillInUpdateBlog(c.Request().Context(), originBlog, updateBlog)

	res, err := h.blogInteractor.Update(c.Request().Context(), blog)
	if err != nil {
		log.Println(err)
		return c.String(http.StatusInternalServerError, constant.INTERNAL_SERVER_ERROR_MESSAGE)
	}

	return c.JSON(http.StatusOK, res)
}

func (h *BlogHandler) Delete(c echo.Context) error {
	id := c.Param("id")

	intID, err := strconv.Atoi(id)
	if err != nil {
		log.Println(err)
		return c.String(http.StatusBadRequest, constant.BAD_REQUEST_MESSAGE)
	}

	if err := h.blogInteractor.Delete(c.Request().Context(), intID); err != nil {
		log.Println(err)
		return c.String(http.StatusInternalServerError, constant.INTERNAL_SERVER_ERROR_MESSAGE)
	}

	return c.JSON(http.StatusOK, constant.SUCCESS_MESSAGE)
}
