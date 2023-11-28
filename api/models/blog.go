package models

import (
	"time"

	"github.com/Daaaai0809/kabos-dev.com/domain/entity"
)

type Blog struct {
	ID        int       `json:"id" bun:"id,pk,autoincrement"`
	Title     string    `json:"title" bun:"title,notnull"`
	Thumbnail string    `json:"thumbnail" bun:"thumbnail"`
	URL       string    `json:"url" bun:"url"`
	Content   string    `json:"content" bun:"content,type:text"`
	Tags      []*Tag    `json:"tags" bun:"m2m:blog_tags,join:Blog=Tag"`
	CreatedAt time.Time `json:"created_at" bun:"created_at,default:current_timestamp"`
	UpdatedAt time.Time `json:"updated_at" bun:"updated_at,default:current_timestamp"`
}

func (b *Blog) ToBlogEntity() *entity.Blog {
	var entityTags []*entity.Tag
	for _, tag := range b.Tags {
		entityTag := tag.ToTagEntity()
		entityTags = append(entityTags, entityTag)
	}
	return entity.NewBlogEntity(b.ID, b.Title, b.Content, b.Thumbnail, b.URL, entityTags, b.CreatedAt, b.UpdatedAt)
}
