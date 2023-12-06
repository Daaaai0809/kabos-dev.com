package blog

type UpdateBlogRequest struct {
	ID        int    `json:"id"`
	Title     string `json:"title"`
	Content   string `json:"content"`
	Thumbnail string `json:"thumbnail"`
	URL       string `json:"url"`
}
