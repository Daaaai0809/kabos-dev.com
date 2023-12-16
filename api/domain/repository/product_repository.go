package repository

import (
	"context"

	"github.com/Daaaai0809/kabos-dev.com/models"
)

type IProductRepository interface {
	FindAll(ctx context.Context) ([]*models.Product, error)
	FindByID(ctx context.Context, id int) (*models.Product, error)
	FindByName(ctx context.Context, name string) ([]*models.Product, error)
	Create(ctx context.Context, product *models.Product) (int64, error)
	Update(ctx context.Context, product *models.Product) error
	Delete(ctx context.Context, id int) error
}
