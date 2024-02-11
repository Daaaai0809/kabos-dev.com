package models

import (
	"time"

	"github.com/Daaaai0809/kabos-dev.com/domain/entity"
)

type Blog struct {
	ID        int       `bun:"id,pk,autoincrement"`
	Title     string    `bun:"title,notnull"`
	Thumbnail string    `bun:"thumbnail"`
	URL       string    `bun:"url,notnull"`
	Tags      []*Tag    `bun:"m2m:blog_tags,join:Blog=Tag"`
	PostedAt  time.Time `bun:"posted_at"`
	CreatedAt time.Time `bun:"created_at,nullzero,notnull,default:current_timestamp"`
	UpdatedAt time.Time `bun:"updated_at,nullzero,notnull,default:current_timestamp"`
}

func (b *Blog) ToBlogEntity() *entity.Blog {
	var entityTags []*entity.Tag
	for _, tag := range b.Tags {
		entityTag := tag.ToTagEntity()
		entityTags = append(entityTags, entityTag)
	}
	return entity.NewBlogEntity(b.ID, b.Title, b.Thumbnail, b.URL, entityTags, b.PostedAt, b.CreatedAt, b.UpdatedAt)
}

func NewBlogModel(id int, title, thumbnail, url string, postedAt, createdAt, updatedAt time.Time) *Blog {
	return &Blog{
		ID:        id,
		Title:     title,
		Thumbnail: thumbnail,
		URL:       url,
		PostedAt:  postedAt,
		CreatedAt: createdAt,
		UpdatedAt: updatedAt,
	}
}

func NewCreateBlogModel(title, thumbnail, url string, postedAt time.Time) *Blog {
	return &Blog{
		Title:     title,
		Thumbnail: thumbnail,
		URL:       url,
		PostedAt:  postedAt,
	}
}
