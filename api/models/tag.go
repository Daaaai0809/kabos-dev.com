package models

import (
	"time"

	"github.com/Daaaai0809/kabos-dev.com/domain/entity"
)

type Tag struct {
	ID        int       `bun:"id,pk,autoincrement"`
	Name      string    `bun:"name,notnull,unique"`
	Blogs     []*Blog   `bun:"m2m:blog_tags,join:Tag=Blog"`
	CreatedAt time.Time `bun:"created_at,nullzero,notnull,default:current_timestamp"`
	UpdatedAt time.Time `bun:"updated_at,nullzero,notnull,default:current_timestamp"`
}

func (t *Tag) ToTagEntity() *entity.Tag {
	return entity.NewTagEntity(t.ID, t.Name, t.CreatedAt, t.UpdatedAt)
}

func NewTagModel(id int, name string, createdAt, updatedAt time.Time) *Tag {
	return &Tag{
		ID:        id,
		Name:      name,
		CreatedAt: createdAt,
		UpdatedAt: updatedAt,
	}
}

func NewCreateTagModel(name string) *Tag {
	return &Tag{
		Name: name,
	}
}
