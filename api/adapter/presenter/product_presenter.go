package presenter

import (
	"github.com/Daaaai0809/kabos-dev.com/domain/entity"
	"github.com/Daaaai0809/kabos-dev.com/usecase/presenter"
)

type ProductPresenter struct{}

func NewProductPresenter() presenter.IProductPresenter {
	return &ProductPresenter{}
}

func (p *ProductPresenter) GenerateGetAllResponse(products []*entity.Product) *presenter.GetAllProductResponse {
	var responseProducts []*presenter.ProductResponse
	for _, product := range products {
		resPonseProduct := &presenter.ProductResponse{
			ID:          product.ID,
			Name:        product.Name,
			Thumbnail:   product.Thumbnail,
			Content:     product.Content,
			URL:         product.URL,
			ReleasedAt: product.ReleasedAt,
		}

		responseProducts = append(responseProducts, resPonseProduct)
	}

	return &presenter.GetAllProductResponse{
		Products: responseProducts,
	}
}

func (p *ProductPresenter) GenerateGetByIDResponse(product *entity.Product) *presenter.GetProductByIDResponse {
	responseProduct := &presenter.ProductResponse{
		ID:          product.ID,
		Name:        product.Name,
		Thumbnail:   product.Thumbnail,
		Content:     product.Content,
		URL:         product.URL,
		ReleasedAt: product.ReleasedAt,
	}

	return &presenter.GetProductByIDResponse{
		Product: responseProduct,
	}
}

func (p *ProductPresenter) GenerateGetByNameResponse(products []*entity.Product) *presenter.GetProductByNameResponse {
	var responseProducts []*presenter.ProductResponse
	for _, product := range products {
		resPonseProduct := &presenter.ProductResponse{
			ID:          product.ID,
			Name:        product.Name,
			Thumbnail:   product.Thumbnail,
			Content:     product.Content,
			URL:         product.URL,
			ReleasedAt: product.ReleasedAt,
		}

		responseProducts = append(responseProducts, resPonseProduct)
	}

	return &presenter.GetProductByNameResponse{
		Products: responseProducts,
	}
}

func (p *ProductPresenter) GenerateCreateResponse(product *entity.Product) *presenter.CreateProductResponse {
	responseProduct := &presenter.ProductResponse{
		ID:          product.ID,
		Name:        product.Name,
		Thumbnail:   product.Thumbnail,
		Content:     product.Content,
		URL:         product.URL,
		ReleasedAt: product.ReleasedAt,
	}

	return &presenter.CreateProductResponse{
		Product: responseProduct,
	}
}

func (p *ProductPresenter) GenerateUpdateResponse(product *entity.Product) *presenter.UpdateProductResponse {
	responseProduct := &presenter.ProductResponse{
		ID:          product.ID,
		Name:        product.Name,
		Thumbnail:   product.Thumbnail,
		Content:     product.Content,
		URL:         product.URL,
		ReleasedAt: product.ReleasedAt,
	}

	return &presenter.UpdateProductResponse{
		Product: responseProduct,
	}
}
