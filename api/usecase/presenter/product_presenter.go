package presenter

import (
	"time"

	"github.com/Daaaai0809/kabos-dev.com/domain/entity"
)

type IProductPresenter interface {
	GenerateGetAllResponse(products []*entity.Product) *GetAllProductResponse
	GenerateGetByIDResponse(product *entity.Product) *GetProductByIDResponse
	GenerateGetByNameResponse(products []*entity.Product) *GetProductByNameResponse
	GenerateCreateResponse(product *entity.Product) *CreateProductResponse
	GenerateUpdateResponse(product *entity.Product) *UpdateProductResponse
}

type ProductResponse struct {
	ID          int       `json:"id"`
	Name        string    `json:"name"`
	Thumbnail   string    `json:"thumbnail"`
	Content     string    `json:"content"`
	Description string    `json:"description"`
	URL         string    `json:"url"`
	ReleasedAt  time.Time `json:"released_at"`
}

type GetAllProductResponse struct {
	Products []*ProductResponse `json:"products"`
}

type GetProductByIDResponse struct {
	Product *ProductResponse `json:"product"`
}

type GetProductByNameResponse struct {
	Products []*ProductResponse `json:"products"`
}

type CreateProductResponse struct {
	Product *ProductResponse `json:"product"`
}

type UpdateProductResponse struct {
	Product *ProductResponse `json:"product"`
}
