package models

type BlogTag struct {
	BlogID int   `json:"blog_id" bun:"blog_id,pk"`
	Blog   *Blog `json:"blog" bun:"rel:belongs-to,join:blog_id=id"`
	TagID  int   `json:"tag_id" bun:"tag_id,pk"`
	Tag    *Tag  `json:"tag" bun:"rel:belongs-to,join:tag_id=id"`
}
