package models

type BlogTags struct {
	BlogID int   `bun:"blog_id,pk"`
	Blog   *Blog `bun:"rel:belongs-to,join:blog_id=id"`
	TagID  int   `bun:"tag_id,pk"`
	Tag    *Tag  `bun:"rel:belongs-to,join:tag_id=id"`
}

func NewBlogTagsModel(blogID, tagID int) *BlogTags {
	return &BlogTags{
		BlogID: blogID,
		TagID:  tagID,
	}
}
