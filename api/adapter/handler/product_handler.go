package handler

import (
	"database/sql"
	"net/http"
	"strconv"

	"github.com/labstack/echo/v4"

	"github.com/Daaaai0809/kabos-dev.com/adapter/request/product"
	"github.com/Daaaai0809/kabos-dev.com/config"
	"github.com/Daaaai0809/kabos-dev.com/constants"
	"github.com/Daaaai0809/kabos-dev.com/domain/entity"
	"github.com/Daaaai0809/kabos-dev.com/usecase"
)

type ProductHandler struct {
	productInteractor usecase.IProductInteractor
}

func NewProductHandler(group *echo.Group, adminGroup *echo.Group, productInteractor usecase.IProductInteractor) {
	handler := &ProductHandler{
		productInteractor: productInteractor,
	}

	group.GET("/", handler.GetAll)
	group.GET("/search", handler.GetSearchedProduct)
	group.GET("/:id", handler.GetByID)
	adminGroup.POST("/", handler.Create)
	adminGroup.PUT("/:id", handler.Update)
	adminGroup.DELETE("/:id", handler.Delete)
}

func (h *ProductHandler) GetAll(c echo.Context) error {
	product, err := h.productInteractor.GetAll(c.Request().Context())
	if err != nil {
		return c.String(http.StatusInternalServerError, constant.INTERNAL_SERVER_ERROR_MESSAGE)
	}

	return c.JSON(http.StatusOK, product)
}

func (h *ProductHandler) GetSearchedProduct(c echo.Context) error {
	searchWord := c.QueryParam("search_word")

	res, err := h.productInteractor.GetByName(c.Request().Context(), searchWord)
	if err != nil {
		return c.String(http.StatusInternalServerError, constant.INTERNAL_SERVER_ERROR_MESSAGE)
	}

	return c.JSON(http.StatusOK, res)
}

func (h *ProductHandler) GetByID(c echo.Context) error {
	id := c.Param("id")

	intID, err := strconv.Atoi(id)
	if err != nil {
		return c.String(http.StatusBadRequest, constant.BAD_REQUEST_MESSAGE)
	}

	res, err := h.productInteractor.GetByID(c.Request().Context(), intID)
	if err != nil {
		if err == sql.ErrNoRows {
			return c.String(http.StatusNotFound, constant.NOT_FOUND_MESSAGE)
		}

		return c.String(http.StatusInternalServerError, constant.INTERNAL_SERVER_ERROR_MESSAGE)
	}

	return c.JSON(http.StatusOK, res)
}

func (h *ProductHandler) Create(c echo.Context) error {
	req := &product.CreateProductRequest{}
	if err := c.Bind(req); err != nil {
		return c.String(http.StatusBadRequest, constant.BAD_REQUEST_MESSAGE)
	}

	formatedDate, err := config.FormatDateFromString(req.ReleasedAt)
	if err != nil {
		return c.String(http.StatusBadRequest, constant.BAD_REQUEST_MESSAGE)
	}

	product := &entity.Product{
		Name:        req.Name,
		Thumbnail:   req.Thumbnail,
		Content:     req.Content,
		URL:         req.URL,
		ReleasedAt:  formatedDate,
	}

	res, err := h.productInteractor.Create(c.Request().Context(), product)
	if err != nil {
		return c.String(http.StatusInternalServerError, constant.INTERNAL_SERVER_ERROR_MESSAGE)
	}

	return c.JSON(http.StatusOK, res)
}

func (h *ProductHandler) Update(c echo.Context) error {
	id := c.Param("id")

	intID, err := strconv.Atoi(id)
	if err != nil {
		return c.String(http.StatusBadRequest, constant.BAD_REQUEST_MESSAGE)
	}

	req := &product.UpdateProductRequest{}
	if err := c.Bind(req); err != nil {
		return c.String(http.StatusBadRequest, constant.BAD_REQUEST_MESSAGE)
	}

	formatedDate, err := config.FormatDateFromString(req.ReleasedAt)
	if err != nil {
		return c.String(http.StatusBadRequest, constant.BAD_REQUEST_MESSAGE)
	}

	product := &entity.Product{
		ID:          intID,
		Name:        req.Name,
		Thumbnail:   req.Thumbnail,
		Content:     req.Content,
		URL:         req.URL,
		ReleasedAt:  formatedDate,
	}

	res, err := h.productInteractor.Update(c.Request().Context(), product)
	if err != nil {
		return c.String(http.StatusInternalServerError, constant.INTERNAL_SERVER_ERROR_MESSAGE)
	}

	return c.JSON(http.StatusOK, res)
}

func (h *ProductHandler) Delete(c echo.Context) error {
	id := c.Param("id")

	intID, err := strconv.Atoi(id)
	if err != nil {
		return c.String(http.StatusBadRequest, constant.BAD_REQUEST_MESSAGE)
	}

	if err := h.productInteractor.Delete(c.Request().Context(), intID); err != nil {
		return c.String(http.StatusInternalServerError, constant.INTERNAL_SERVER_ERROR_MESSAGE)
	}

	return c.NoContent(http.StatusNoContent)
}
