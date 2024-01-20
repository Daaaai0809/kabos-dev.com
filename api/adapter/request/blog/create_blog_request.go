package blog

type CreateBlogRequest struct {
	Title     string `json:"title"`
	Thumbnail string `json:"thumbnail"`
	URL       string `json:"url"`
	TagIDs    []int  `json:"tag_ids"`
}
