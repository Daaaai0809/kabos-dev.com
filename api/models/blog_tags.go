package models

import (
	"github.com/Daaaai0809/kabos-dev.com/domain/entity"
)

type BlogTags struct {
	BlogID int   `bun:"blog_id,pk"`
	Blog   *Blog `bun:"rel:belongs-to,join:blog_id=id"`
	TagID  int   `bun:"tag_id,pk"`
	Tag    *Tag  `bun:"rel:belongs-to,join:tag_id=id"`
}

func (bt *BlogTags) ToBlogTagsEntity() *entity.BlogTags {
	return entity.NewBlogTagsEntity(bt.BlogID, bt.TagID)
}

func NewBlogTagsModel(blogID, tagID int) *BlogTags {
	return &BlogTags{
		BlogID: blogID,
		TagID:  tagID,
	}
}
