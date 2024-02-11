package mysql

import (
	"context"
	"sync"

	"github.com/uptrace/bun"

	"github.com/Daaaai0809/kabos-dev.com/domain/repository"
	"github.com/Daaaai0809/kabos-dev.com/models"
)

type blogRepository struct {
	db *bun.DB
	mu sync.Mutex
}


func NewBlogRepository(db *bun.DB) repository.IBlogRepository {
	return &blogRepository{db: db}
}

func (r *blogRepository) GetAll(ctx context.Context) ([]*models.Blog, error) {
	var blogs []*models.Blog

	if err := r.db.NewSelect().Model(&blogs).Relation("Tags").Order("posted_at DESC").Scan(ctx); err != nil {
		return nil, err
	}

	return blogs, nil
}

func (r *blogRepository) GetSearchedBlog(ctx context.Context, searchWord string) ([]*models.Blog, error) {
	var blogs []*models.Blog

	if err := r.db.NewSelect().Model(&blogs).Where("title LIKE ?", "%"+searchWord+"%").Relation("Tags").Order("posted_at DESC").Scan(ctx); err != nil {
		return nil, err
	}

	return blogs, nil
}

func (r *blogRepository) GetByID(ctx context.Context, id int) (*models.Blog, error) {
	var blog models.Blog

	if err := r.db.NewSelect().Model(&blog).Where("id = ?", id).Relation("Tags").Scan(ctx); err != nil {
		return nil, err
	}

	return &blog, nil
}

func (r *blogRepository) Create(ctx context.Context, blog *models.Blog) (int, error) {
	r.mu.Lock()
	defer r.mu.Unlock()

	result, err := r.db.NewInsert().Model(blog).Exec(ctx) 
	if err != nil {
		return 0, err
	}

	createdID, err := result.LastInsertId()
	if err != nil {
		return 0, err
	}

	return int(createdID), nil
}

func (r *blogRepository) Update(ctx context.Context, blog *models.Blog) error {
	r.mu.Lock()
	defer r.mu.Unlock()

	if _, err := r.db.NewUpdate().Model(blog).Where("id = ?", blog.ID).Exec(ctx); err != nil {
		return err
	}

	return nil
}

func (r *blogRepository) Delete(ctx context.Context, id int) error {
	r.mu.Lock()
	defer r.mu.Unlock()

	if _, err := r.db.NewDelete().Model(&models.Blog{}).Where("id = ?", id).Exec(ctx); err != nil {
		return err
	}

	return nil
}
