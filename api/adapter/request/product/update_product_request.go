package product

import (
	"time"
)

type UpdateProductRequest struct {
	Name        string `json:"name"`
	Thumbnail   string `json:"thumbnail"`
	Content     string `json:"content"`
	URL         string `json:"url"`
	ReleasedAt 	time.Time `json:"released_at"`
}
