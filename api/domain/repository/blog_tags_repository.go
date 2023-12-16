package repository

import (
	"context"

	"github.com/Daaaai0809/kabos-dev.com/models"
)

type IBlogTagsRepository interface {
	Create(ctx context.Context, blogTags []*models.BlogTags) error
	DeleteByBlogID(ctx context.Context, id int) error
	DeleteByTagID(ctx context.Context, id int) error
}
