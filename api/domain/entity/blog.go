package entity

import (
	"time"
)

type Blog struct {
	ID        int       `json:"id"`
	Title     string    `json:"title"`
	Thumbnail string    `json:"thumbnail"`
	URL	   	  string    `json:"url"`
	TagIDs	  []int     `json:"tag_ids"`
	Tags      []*Tag    `json:"tags"`
	PostedAt  time.Time `json:"posted_at"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

func NewBlogEntity(id int, title, thumbnail, url string, tags []*Tag, postedAt, createdAt, updatedAt time.Time) *Blog {
	return &Blog{
		ID:        id,
		Title:     title,
		Thumbnail: thumbnail,
		URL:       url,
		Tags:      tags,
		PostedAt:  postedAt,
		CreatedAt: createdAt,
		UpdatedAt: updatedAt,
	}
}
