package entity

type BlogTags struct {
	BlogID int  `json:"blog_id"`
	TagID  int  `json:"tag_id"`
}

func NewBlogTagsEntity(blogID int, tagID int) *BlogTags {
	return &BlogTags{
		BlogID: blogID,
		TagID: tagID,
	}
}
