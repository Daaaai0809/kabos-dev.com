package usecase

import (
	"context"

	"github.com/Daaaai0809/kabos-dev.com/domain/entity"
	"github.com/Daaaai0809/kabos-dev.com/domain/repository"
	"github.com/Daaaai0809/kabos-dev.com/models"
	"github.com/Daaaai0809/kabos-dev.com/usecase/presenter"
)

type IProductInteractor interface {
	GetAll(ctx context.Context) (*presenter.GetAllProductResponse, error)
	GetByID(ctx context.Context, id int) (*presenter.GetProductByIDResponse, error)
	GetByName(ctx context.Context, name string) (*presenter.GetProductByNameResponse, error)
	Create(ctx context.Context, product *entity.Product) (*presenter.CreateProductResponse, error)
	Update(ctx context.Context, product *entity.Product) (*presenter.UpdateProductResponse, error)
	Delete(ctx context.Context, id int) error
}

type ProductInteractor struct {
	productRepository repository.IProductRepository
	productPresenter presenter.IProductPresenter
}

func NewProductInteractor(productRepository repository.IProductRepository, productPresenter presenter.IProductPresenter) IProductInteractor {
	return &ProductInteractor{
		productRepository: productRepository,
		productPresenter: productPresenter,
	}
}

func (i *ProductInteractor) GetAll(ctx context.Context) (*presenter.GetAllProductResponse, error) {
	products, err := i.productRepository.FindAll(ctx)
	if err != nil {
		return &presenter.GetAllProductResponse{}, err
	}

	var entityProducts []*entity.Product
	for _, product := range products {
		entityProduct := product.ToProductEntity()
		entityProducts = append(entityProducts, entityProduct)
	}

	return i.productPresenter.GenerateGetAllResponse(entityProducts), nil
}

func (i *ProductInteractor) GetByID(ctx context.Context, id int) (*presenter.GetProductByIDResponse, error) {
	product, err := i.productRepository.FindByID(ctx, id)
	if err != nil {
		return &presenter.GetProductByIDResponse{}, err
	}

	entityProduct := product.ToProductEntity()

	return i.productPresenter.GenerateGetByIDResponse(entityProduct), nil
}

func (i *ProductInteractor) GetByName(ctx context.Context, name string) (*presenter.GetProductByNameResponse, error) {
	products, err := i.productRepository.FindByName(ctx, name)
	if err != nil {
		return &presenter.GetProductByNameResponse{}, err
	}

	var entityProducts []*entity.Product
	for _, product := range products {
		entityProduct := product.ToProductEntity()
		entityProducts = append(entityProducts, entityProduct)
	}

	return i.productPresenter.GenerateGetByNameResponse(entityProducts), nil
}

func (i *ProductInteractor) Create(ctx context.Context, product *entity.Product) (*presenter.CreateProductResponse, error) {
	productModel := &models.Product{
		Name:        product.Name,
		Thumbnail:   product.Thumbnail,
		Content:     product.Content,
		URL:         product.URL,
		ReleaseDate: product.ReleasedAt,
	}

	res, err := i.productRepository.Create(ctx, productModel)
	if err != nil {
		return &presenter.CreateProductResponse{}, err
	}

	product.ID = int(res)

	createdProduct, err := i.productRepository.FindByID(ctx, int(res))
	if err != nil {
		return &presenter.CreateProductResponse{}, err
	}

	entityProduct := createdProduct.ToProductEntity()

	return i.productPresenter.GenerateCreateResponse(entityProduct), nil
}

func (i *ProductInteractor) Update(ctx context.Context, product *entity.Product) (*presenter.UpdateProductResponse, error) {
	productModel := &models.Product{
		ID:          product.ID,
		Name:        product.Name,
		Thumbnail:   product.Thumbnail,
		Content:     product.Content,
		URL:         product.URL,
		ReleaseDate: product.ReleasedAt,
	}

	if err := i.productRepository.Update(ctx, productModel); err != nil {
		return &presenter.UpdateProductResponse{}, err
	}

	updatedProduct, err := i.productRepository.FindByID(ctx, product.ID)
	if err != nil {
		return &presenter.UpdateProductResponse{}, err
	}

	entityProduct := updatedProduct.ToProductEntity()

	return i.productPresenter.GenerateUpdateResponse(entityProduct), nil
}

func (i *ProductInteractor) Delete(ctx context.Context, id int) error {
	if err := i.productRepository.Delete(ctx, id); err != nil {
		return err
	}

	return nil
}