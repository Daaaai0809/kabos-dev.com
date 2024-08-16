package models

import (
	"time"

	"github.com/Daaaai0809/kabos-dev.com/domain/entity"
)

type Blog struct {
	ID        int       `bun:"id,pk,autoincrement"`
	Title     string    `bun:"title,notnull"`
	URL       string    `bun:"url"`
	Content   string    `bun:"content,type:text"`
	Tags      []*Tag    `bun:"m2m:blog_tags,join:Blog=Tag"`
	Emoji     string    `bun:"emoji,default:'📝'"`
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
	return entity.NewBlogEntity(b.ID, b.Title, b.URL, b.Emoji, b.Content, entityTags, b.PostedAt, b.CreatedAt, b.UpdatedAt)
}

func NewBlogModel(id int, title, url, emoji, content string, postedAt, createdAt, updatedAt time.Time) *Blog {
	return &Blog{
		ID:        id,
		Title:     title,
		URL:       url,
		Emoji:     emoji,
		Content:   content,
		PostedAt:  postedAt,
		CreatedAt: createdAt,
		UpdatedAt: updatedAt,
	}
}

func NewCreateBlogModel(title, url, emoji, content string, postedAt time.Time) *Blog {
	return &Blog{
		Title:    title,
		URL:      url,
		Emoji:    emoji,
		Content:  content,
		PostedAt: postedAt,
	}
}
