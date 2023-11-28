package entity

import (
	"time"
)

type Blog struct {
	ID        int       `json:"id"`
	Title     string    `json:"title"`
	Content   string    `json:"content"`
	Thumbnail string    `json:"thumbnail"`
	URL	   	  string    `json:"url"`
	Tags 	  []*Tag    `json:"tags"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

func NewBlogEntity(id int, title, content, thumbnail, url string, tags []*Tag, createdAt, updatedAt time.Time) *Blog {
	return &Blog{
		ID:        id,
		Title:     title,
		Content:   content,
		Thumbnail: thumbnail,
		URL:       url,
		Tags:      tags,
		CreatedAt: createdAt,
		UpdatedAt: updatedAt,
	}
}
