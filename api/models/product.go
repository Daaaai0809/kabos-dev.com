package models

import (
	"time"
)

type Product struct {
	ID          int       `bun:"id,pk,autoincrement"`
	Name        string    `bun:"name,notnull"`
	Content     string    `bun:"content,notnull"`
	URL         string    `bun:"url"`
	ReleaseDate time.Time `bun:"release_date"`
	CreatedAt   time.Time `bun:"created_at,default:current_timestamp"`
	UpdatedAt   time.Time `bun:"updated_at,default:current_timestamp"`
}
