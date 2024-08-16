package entity

import (
	"time"
)

type Blog struct {
	ID        int       `json:"id"`
	Title     string    `json:"title"`
	URL       string    `json:"url"`
	TagIDs    []int     `json:"tag_ids"`
	Tags      []*Tag    `json:"tags"`
	Emoji     string    `json:"emoji"`
	Content   string    `json:"content"`
	PostedAt  time.Time `json:"posted_at"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

func NewBlogEntity(id int, title, url, emoji, content string, tags []*Tag, postedAt, createdAt, updatedAt time.Time) *Blog {
	return &Blog{
		ID:        id,
		Title:     title,
		URL:       url,
		Emoji:     emoji,
		Content:   content,
		Tags:      tags,
		PostedAt:  postedAt,
		CreatedAt: createdAt,
		UpdatedAt: updatedAt,
	}
}
