package models

import (
	"time"

	"github.com/Daaaai0809/kabos-dev.com/domain/entity"
)

type Tag struct {
	ID        int       `bun:"id,pk,autoincrement"`
	Name      string    `bun:"name,notnull,unique"`
	Blogs     []*Blog   `bun:"m2m:blog_tags,join:Tag=Blog"`
	CreatedAt time.Time `bun:"created_at,default:current_timestamp"`
	UpdatedAt time.Time `bun:"updated_at,default:current_timestamp"`
}

func (t *Tag) ToTagEntity() *entity.Tag {
	return entity.NewTagEntity(t.ID, t.Name, t.CreatedAt, t.UpdatedAt)
}
