package models

import (
	"time"

	"github.com/Daaaai0809/kabos-dev.com/domain/entity"
)

type Tag struct {
	ID   int    `json:"id" bun:"id,pk,autoincrement"`
	Name string `json:"name" bun:"name,notnull,unique"`
	Blogs []*Blog `json:"blogs" bun:"m2m:blog_tags,join:Tag=Blog"`
	CreatedAt time.Time `json:"created_at" bun:"created_at,default:current_timestamp"`
	UpdatedAt time.Time `json:"updated_at" bun:"updated_at,default:current_timestamp"`
}

func (t *Tag) ToTagEntity() *entity.Tag {
	return entity.NewTagEntity(t.ID, t.Name, t.CreatedAt, t.UpdatedAt)
}
