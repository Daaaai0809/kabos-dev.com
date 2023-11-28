package mysql

import (
	"context"
	"sync"

	"github.com/Daaaai0809/kabos-dev.com/domain/repository"
	"github.com/Daaaai0809/kabos-dev.com/models"
	"github.com/uptrace/bun"
)

type BlogTagsRepository struct {
	db *bun.DB
	mu sync.Mutex
}

func NewBlogTagsRepository(db *bun.DB) repository.IBlogTagsRepository {
	return &BlogTagsRepository{db: db}
}

func (r *BlogTagsRepository) Create(ctx context.Context, blogTags []*models.BlogTags) error {
	r.mu.Lock()
	defer r.mu.Unlock()

	_, err := r.db.NewInsert().Model(&blogTags).Exec(ctx)
	if err != nil {
		return err
	}

	return nil
}

func (r *BlogTagsRepository) DeleteByBlogID(ctx context.Context, blogID int) error {
	r.mu.Lock()
	defer r.mu.Unlock()

	_, err := r.db.NewDelete().Model(&models.BlogTags{}).Where("blog_id = ?", blogID).Exec(ctx)
	if err != nil {
		return err
	}

	return nil
}

func (r *BlogTagsRepository) DeleteByTagID(ctx context.Context, tagID int) error {
	r.mu.Lock()
	defer r.mu.Unlock()

	_, err := r.db.NewDelete().Model(&models.BlogTags{}).Where("tag_id = ?", tagID).Exec(ctx)
	if err != nil {
		return err
	}

	return nil
}
