package models

import (
	"time"

	"github.com/Daaaai0809/kabos-dev.com/domain/entity"
)

type Product struct {
	ID          int       `bun:"id,pk,autoincrement"`
	Name        string    `bun:"name,notnull"`
	Thumbnail   string    `bun:"thumbnail,notnull"`
	Content     string    `bun:"content,notnull,type:text"`
	Description string    `bun:"description,notnull,type:text"`
	URL         string    `bun:"url"`
	ReleaseDate time.Time `bun:"release_date"`
	CreatedAt   time.Time `bun:"created_at,nullzero,notnull,default:current_timestamp"`
	UpdatedAt   time.Time `bun:"updated_at,nullzero,notnull,default:current_timestamp"`
}

func (p *Product) ToProductEntity() *entity.Product {
	return entity.NewProductEntity(p.ID, p.Name, p.Thumbnail, p.Content, p.Description, p.URL, p.ReleaseDate, p.CreatedAt, p.UpdatedAt)
}

func NewProductModel(id int, name, thumbnail, content, description, url string, releaseDate time.Time, createdAt, updatedAt time.Time) *Product {
	return &Product{
		ID:          id,
		Name:        name,
		Thumbnail:   thumbnail,
		Content:     content,
		Description: description,
		URL:         url,
		ReleaseDate: releaseDate,
		CreatedAt:   createdAt,
		UpdatedAt:   updatedAt,
	}
}

func NewCreateProductModel(name, thumbnail, content, description, url string, releaseDate time.Time) *Product {
	return &Product{
		Name:        name,
		Thumbnail:   thumbnail,
		Content:     content,
		Description: description,
		URL:         url,
		ReleaseDate: releaseDate,
	}
}
