package handler

import (
	"net/http"
	"strconv"

	"github.com/Daaaai0809/kabos-dev.com/adapter/request/tag"
	"github.com/Daaaai0809/kabos-dev.com/constants"
	"github.com/Daaaai0809/kabos-dev.com/domain/entity"
	"github.com/Daaaai0809/kabos-dev.com/usecase"
	"github.com/labstack/echo/v4"
)

type TagHandler struct {
	tagInteractor usecase.ITagInteractor
}

func NewTagHandler(group *echo.Group, adminGroup *echo.Group, tagInteractor usecase.ITagInteractor) {
	handler := &TagHandler{
		tagInteractor: tagInteractor,
	}

	group.GET("/", handler.GetAll)
	group.GET("/search", handler.GetSearchedTag)
	group.GET("/:id", handler.GetByID)
	adminGroup.POST("/", handler.Create)
	adminGroup.PUT("/:id", handler.Update)
	adminGroup.DELETE("/:id", handler.Delete)
}

func (h *TagHandler) GetAll(c echo.Context) error {
	tags, err := h.tagInteractor.GetAll(c.Request().Context())
	if err != nil {
		return c.String(http.StatusInternalServerError, constant.INTERNAL_SERVER_ERROR_MESSAGE)
	}

	return c.JSON(http.StatusOK, tags)
}

func (h *TagHandler) GetSearchedTag(c echo.Context) error {
	searchWord := c.QueryParam("search_word")

	res, err := h.tagInteractor.GetByName(c.Request().Context(), searchWord)
	if err != nil {
		return c.String(http.StatusInternalServerError, constant.INTERNAL_SERVER_ERROR_MESSAGE)
	}

	return c.JSON(http.StatusOK, res)
}

func (h *TagHandler) GetByID(c echo.Context) error {
	id := c.Param("id")

	intID, err := strconv.Atoi(id)
	if err != nil {
		return c.String(http.StatusBadRequest, constant.BAD_REQUEST_MESSAGE)
	}

	res, err := h.tagInteractor.GetByID(c.Request().Context(), intID)
	if err != nil {
		return c.String(http.StatusInternalServerError, constant.INTERNAL_SERVER_ERROR_MESSAGE)
	}

	return c.JSON(http.StatusOK, res)
}

func (h *TagHandler) Create(c echo.Context) error {
	var tagRequest = tag.CreateTagRequest{}
	if err := c.Bind(&tagRequest); err != nil {
		return c.String(http.StatusBadRequest, constant.BAD_REQUEST_MESSAGE)
	}

	tag := &entity.Tag{
		Name: tagRequest.Name,
	}

	if err := h.tagInteractor.Create(c.Request().Context(), tag); err != nil {
		return c.String(http.StatusInternalServerError, constant.INTERNAL_SERVER_ERROR_MESSAGE)
	}

	return c.JSON(http.StatusOK, constant.SUCCESS_MESSAGE)
}

func (h *TagHandler) Update(c echo.Context) error {
	id := c.Param("id")

	intID, err := strconv.Atoi(id)
	if err != nil {
		return c.String(http.StatusBadRequest, constant.BAD_REQUEST_MESSAGE)
	}

	var tagRequest = tag.UpdateTagRequest{}
	if err := c.Bind(&tagRequest); err != nil {
		return c.String(http.StatusBadRequest, constant.BAD_REQUEST_MESSAGE)
	}

	tag := &entity.Tag{
		ID: intID,
		Name: tagRequest.Name,
	}

	if err := h.tagInteractor.Update(c.Request().Context(), tag); err != nil {
		return c.String(http.StatusInternalServerError, constant.INTERNAL_SERVER_ERROR_MESSAGE)
	}

	return c.JSON(http.StatusOK, constant.SUCCESS_MESSAGE)
}

func (h *TagHandler) Delete(c echo.Context) error {
	id := c.Param("id")

	intID, err := strconv.Atoi(id)
	if err != nil {
		return c.String(http.StatusBadRequest, constant.BAD_REQUEST_MESSAGE)
	}

	if err := h.tagInteractor.Delete(c.Request().Context(), intID); err != nil {
		return c.String(http.StatusInternalServerError, constant.INTERNAL_SERVER_ERROR_MESSAGE)
	}

	return c.JSON(http.StatusOK, constant.SUCCESS_MESSAGE)
}
