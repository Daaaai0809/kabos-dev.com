package blog

type CreateBlogRequest struct {
	Title     string `json:"title"`
	Thumbnail string `json:"thumbnail"`
	URL       string `json:"url"`
	PostedAt  string `json:"posted_at"`
	TagIDs    []int  `json:"tag_ids"`
}
