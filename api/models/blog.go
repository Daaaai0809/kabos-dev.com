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
	CreatedAt time.Time `bun:"created_at,default:current_timestamp"`
	UpdatedAt time.Time `bun:"updated_at,default:current_timestamp"`
}

func (b *Blog) ToBlogEntity() *entity.Blog {
	var entityTags []*entity.Tag
	for _, tag := range b.Tags {
		entityTag := tag.ToTagEntity()
		entityTags = append(entityTags, entityTag)
	}
	return entity.NewBlogEntity(b.ID, b.Title, b.Thumbnail, b.URL, entityTags, b.CreatedAt, b.UpdatedAt)
}
