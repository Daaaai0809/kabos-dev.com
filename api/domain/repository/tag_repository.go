package repository

import (
	"context"

	"github.com/Daaaai0809/kabos-dev.com/models"
)

type ITagRepository interface {
	GetAll(ctx context.Context) ([]*models.Tag, error)
	GetByID(ctx context.Context, id int) (*models.Tag, error)
	GetByName(ctx context.Context, name string) ([]*models.Tag, error)
	Create(ctx context.Context, tag *models.Tag) error
	Update(ctx context.Context, tag *models.Tag) error
	Delete(ctx context.Context, id int) error
}
