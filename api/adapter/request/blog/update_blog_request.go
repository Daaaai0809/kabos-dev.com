package blog

type UpdateBlogRequest struct {
	Title    string `json:"title"`
	URL      string `json:"url"`
	Emoji    string `json:"emoji"`
	Content  string `json:"content"`
	PostedAt string `json:"posted_at"`
	TagIDs   []int  `json:"tag_ids"`
}
