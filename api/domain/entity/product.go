package entity

import (
	"time"
)

type Product struct {
	ID          int       `json:"id"`
	Name		string    `json:"name"`
	Thumbnail   string    `json:"thumbnail"`
	Content	 	string    `json:"content"`
	URL			string    `json:"url"`
	ReleasedAt  time.Time `json:"released_at"`
	CreatedAt   time.Time `json:"created_at"`
	UpdatedAt   time.Time `json:"updated_at"`
}

func NewProductEntity(id int, name, thumbnail, content, url string, releasedAt, createdAt, updatedAt time.Time) *Product {
	return &Product{
		ID:          id,
		Name:        name,
		Thumbnail:   thumbnail,
		Content:     content,
		URL:         url,
		ReleasedAt:  releasedAt,
		CreatedAt:   createdAt,
		UpdatedAt:   updatedAt,
	}
}
