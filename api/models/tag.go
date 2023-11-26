package models

type Tag struct {
	ID   int    `json:"id" bun:"id,pk,autoincrement"`
	Name string `json:"name" bun:"name,notnull,unique"`
	Blogs []*Blog `json:"blogs" bun:"m2m:blog_tags,join:Tag=Blog"`
}
