package blog

type UpdateBlogRequest struct {
	Title     string `json:"title"`
	Thumbnail string `json:"thumbnail"`
	URL       string `json:"url"`
	Emoji     string `json:"emoji"`
	PostedAt  string `json:"posted_at"`
	TagIDs    []int  `json:"tag_ids"`
}
