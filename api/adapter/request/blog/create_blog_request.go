package blog

type CreateBlogRequest struct {
	Title     string `json:"title"`
	Content   string `json:"content"`
	Thumbnail string `json:"thumbnail"`
	URL       string `json:"url"`
	TagIDs    []int  `json:"tag_ids"`
}
