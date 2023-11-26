package models

import (
	"time"
)

type Product struct {
	ID          int       `json:"id" bun:"id,pk,autoincrement"`
	Name        string    `json:"name" bun:"name,notnull"`
	Content     string    `json:"content" bun:"content,notnull"`
	URL         string    `json:"url" bun:"url"`
	ReleaseDate time.Time `json:"release_date" bun:"release_date"`
	CreatedAt   time.Time `json:"created_at" bun:"created_at,default:current_timestamp"`
	UpdatedAt   time.Time `json:"updated_at" bun:"updated_at,default:current_timestamp"`
}
