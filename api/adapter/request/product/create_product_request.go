package product

type CreateProductRequest struct {
	Name        string `json:"name"`
	Thumbnail   string `json:"thumbnail"`
	Content     string `json:"content"`
	URL         string `json:"url"`
	ReleasedAt 	string `json:"released_at"`
}
