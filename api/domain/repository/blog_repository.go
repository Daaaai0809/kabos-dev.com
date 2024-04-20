package repository

import (
	"context"

	"github.com/Daaaai0809/kabos-dev.com/models"
)

type IBlogRepository interface {
	GetAll(ctx context.Context) ([]*models.Blog, error)
	GetSearchedBlog(ctx context.Context, searchWord string) ([]*models.Blog, error)
	GetByID(ctx context.Context, id int) (*models.Blog, error)
	Create(ctx context.Context, blog *models.Blog, tagIds []int) (int, error)
	Update(ctx context.Context, blog *models.Blog, tagIds []int) error
	Delete(ctx context.Context, id int) error
}
