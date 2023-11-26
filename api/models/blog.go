package models

import (
	"time"
)

type Blog struct {
	ID        int       `json:"id" bun:"id,pk,autoincrement"`
	Title     string    `json:"title" bun:"title,notnull"`
	URL       string    `json:"url" bun:"url"`
	Content   string    `json:"content" bun:"content"`
	Tags      []*Tag    `json:"tags" bun:"tags,joion:Blog=Tag"`
	CreatedAt time.Time `json:"created_at" bun:"created_at,default=current_timestamp"`
	UpdatedAt time.Time `json:"updated_at" bun:"updated_at,default=current_timestamp"`
}
