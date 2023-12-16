package mysql

import (
	"context"
	"sync"

	"github.com/uptrace/bun"

	"github.com/Daaaai0809/kabos-dev.com/domain/repository"
	"github.com/Daaaai0809/kabos-dev.com/models"
)

type productRepository struct {
	db *bun.DB
	mu sync.Mutex
}

func NewProductRepository(db *bun.DB) repository.IProductRepository {
	return &productRepository{db: db}
}

func (r *productRepository) FindAll(ctx context.Context) ([]*models.Product, error) {
	var products []*models.Product

	if err := r.db.NewSelect().Model(&products).Scan(ctx); err != nil {
		return nil, err
	}

	return products, nil
}

func (r *productRepository) FindByID(ctx context.Context, id int) (*models.Product, error) {
	var product models.Product

	if err := r.db.NewSelect().Model(&product).Where("id = ?", id).Scan(ctx); err != nil {
		return nil, err
	}

	return &product, nil
}

func (r *productRepository) FindByName(ctx context.Context, name string) ([]*models.Product, error) {
	var products []*models.Product

	if err := r.db.NewSelect().Model(&products).Where("name LIKE ?", "%"+name+"%").Scan(ctx); err != nil {
		return nil, err
	}

	return products, nil
}

func (r *productRepository) Create(ctx context.Context, product *models.Product) (int64, error) {
	r.mu.Lock()
	defer r.mu.Unlock()

	result, err := r.db.NewInsert().Model(product).Exec(ctx)
	if err != nil {
		return 0, err
	}

	return result.LastInsertId()
}

func (r *productRepository) Update(ctx context.Context, product *models.Product) error {
	r.mu.Lock()
	defer r.mu.Unlock()

	_, err := r.db.NewUpdate().Model(product).Where("id = ?", product.ID).Exec(ctx)
	if err != nil {
		return err
	}

	return nil
}

func (r *productRepository) Delete(ctx context.Context, id int) error {
	r.mu.Lock()
	defer r.mu.Unlock()

	_, err := r.db.NewDelete().Model(&models.Product{}).Where("id = ?", id).Exec(ctx)
	if err != nil {
		return err
	}

	return nil
}
