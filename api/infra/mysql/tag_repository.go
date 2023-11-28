package mysql

import (
	"context"
	"sync"

	"github.com/Daaaai0809/kabos-dev.com/domain/repository"
	"github.com/Daaaai0809/kabos-dev.com/models"
	"github.com/uptrace/bun"
)

type TagRepository struct {
	db *bun.DB
	mu sync.Mutex
}

func NewTagRepository(db *bun.DB) repository.ITagRepository {
	return &TagRepository{db: db}
}

func (r *TagRepository) GetAll(ctx context.Context) ([]*models.Tag, error) {
	var tags []*models.Tag
	err := r.db.NewSelect().Model(&tags).Scan(ctx)
	if err != nil {
		return nil, err
	}

	return tags, nil
}

func (r *TagRepository) GetByID(ctx context.Context, id int) (*models.Tag, error) {
	var tag models.Tag
	err := r.db.NewSelect().Model(&tag).Where("id = ?", id).Scan(ctx)
	if err != nil {
		return nil, err
	}

	return &tag, nil
}

func (r *TagRepository) GetByName(ctx context.Context, name string) ([]*models.Tag, error) {
	var tags []*models.Tag
	err := r.db.NewSelect().Model(&tags).Where("name = ?", name).Scan(ctx)
	if err != nil {
		return nil, err
	}

	return tags, nil
}

func (r *TagRepository) Create(ctx context.Context, tag *models.Tag) error {
	r.mu.Lock()
	defer r.mu.Unlock()

	_, err := r.db.NewInsert().Model(tag).Exec(ctx)
	if err != nil {
		return err
	}

	return nil
}

func (r *TagRepository) Update(ctx context.Context, tag *models.Tag) error {
	r.mu.Lock()
	defer r.mu.Unlock()

	_, err := r.db.NewUpdate().Model(tag).Where("id = ?", tag.ID).Exec(ctx)
	if err != nil {
		return err
	}

	return nil
}

func (r *TagRepository) Delete(ctx context.Context, id int) error {
	r.mu.Lock()
	defer r.mu.Unlock()

	_, err := r.db.NewDelete().Model(&models.Tag{}).Where("id = ?", id).Exec(ctx)
	if err != nil {
		return err
	}

	return nil
}
