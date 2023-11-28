package models

import (
	"github.com/Daaaai0809/kabos-dev.com/domain/entity"
)

type BlogTags struct {
	BlogID int   `json:"blog_id" bun:"blog_id,pk"`
	Blog   *Blog `json:"blog" bun:"rel:belongs-to,join:blog_id=id"`
	TagID  int   `json:"tag_id" bun:"tag_id,pk"`
	Tag    *Tag  `json:"tag" bun:"rel:belongs-to,join:tag_id=id"`
}

func (bt *BlogTags) ToBlogTagsEntity() *entity.BlogTags {
	return entity.NewBlogTagsEntity(bt.BlogID, bt.TagID)
}
