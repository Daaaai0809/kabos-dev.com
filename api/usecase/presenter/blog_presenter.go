package presenter

import (
	"github.com/Daaaai0809/kabos-dev.com/domain/entity"
)

type BlogResponse struct {
	ID        int    `json:"id"`
	Title     string `json:"title"`
	Thumbnail string `json:"thumbnail"`
	URL       string `json:"url"`
	Tags      []TagResponse `json:"tags"`
	PostedAt  string `json:"posted_at"`
	CreatedAt string `json:"created_at"`
}

type GetAllBlogResponse struct {
	Blogs []BlogResponse `json:"blogs"`
}

type GetSearchedBlogResponse struct {
	Blogs []BlogResponse `json:"blogs"`
}

type GetBlogByIDResponse struct {
	Blog BlogResponse `json:"blog"`
}

type CreateBlogResponse struct {
	Blog BlogResponse `json:"blog"`
}

type UpdateBlogResponse struct {
	Blog BlogResponse `json:"blog"`
}

type IBlogPresenter interface {
	GenerateGetAllResponse(blogs []*entity.Blog) *GetAllBlogResponse
	GenerateGetSearchedBlogResponse(blogs []*entity.Blog) *GetSearchedBlogResponse
	GenerateGetByIDResponse(blog *entity.Blog) *GetBlogByIDResponse
	GenerateCreateResponse(blog *entity.Blog) *CreateBlogResponse
	GenerateUpdateResponse(blog *entity.Blog) *UpdateBlogResponse
}
