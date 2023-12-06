package presenter

import (
	"github.com/Daaaai0809/kabos-dev.com/domain/entity"
	"github.com/Daaaai0809/kabos-dev.com/usecase/presenter"
)

type BlogPresenter struct{}

func NewBlogPresenter() presenter.IBlogPresenter {
	return &BlogPresenter{}
}

func (p *BlogPresenter) GenerateGetAllResponse(blogs []*entity.Blog) *presenter.GetAllBlogResponse {
	var tags []presenter.TagResponse

	var blogsResponse presenter.GetAllBlogResponse
	for _, blog := range blogs {
		for _, tag := range blog.Tags {
			tags = append(tags, presenter.TagResponse{
				ID:   tag.ID,
				Name: tag.Name,
			})
		}

		blogsResponse.Blogs = append(blogsResponse.Blogs, presenter.BlogResponse{
			ID:        blog.ID,
			Title:     blog.Title,
			Content:   blog.Content,
			Thumbnail: blog.Thumbnail,
			URL:       blog.URL,
			Tags:      tags,
			CreatedAt: blog.CreatedAt.String(),
		})
	}

	return &blogsResponse
}
	
func (p *BlogPresenter) GenerateGetSearchedBlogResponse(blogs []*entity.Blog) *presenter.GetSearchedBlogResponse {
	var tags []presenter.TagResponse
	
	var blogsResponse presenter.GetSearchedBlogResponse
	for _, blog := range blogs {
		for _, tag := range blog.Tags {
			tags = append(tags, presenter.TagResponse{
				ID:   tag.ID,
				Name: tag.Name,
			})
		}

		blogsResponse.Blogs = append(blogsResponse.Blogs, presenter.BlogResponse{
			ID:        blog.ID,
			Title:     blog.Title,
			Content:   blog.Content,
			Thumbnail: blog.Thumbnail,
			URL:       blog.URL,
			Tags:      tags,
			CreatedAt: blog.CreatedAt.String(),
		})
	}

	return &blogsResponse
}

func (p *BlogPresenter) GenerateGetByIDResponse(blog *entity.Blog) *presenter.GetBlogByIDResponse {
	var tags []presenter.TagResponse

	for _, tag := range blog.Tags {
		tags = append(tags, presenter.TagResponse{
			ID:   tag.ID,
			Name: tag.Name,
		})
	}

	var blogResponse presenter.GetBlogByIDResponse
	blogResponse.Blog = presenter.BlogResponse{
		ID:        blog.ID,
		Title:     blog.Title,
		Content:   blog.Content,
		Thumbnail: blog.Thumbnail,
		URL:       blog.URL,
		Tags:      tags,
		CreatedAt: blog.CreatedAt.String(),
	}

	return &blogResponse
}

func (p *BlogPresenter) GenerateCreateResponse(blog *entity.Blog) *presenter.CreateBlogResponse {
	var tags []presenter.TagResponse

	for _, tag := range blog.Tags {
		tags = append(tags, presenter.TagResponse{
			ID:   tag.ID,
			Name: tag.Name,
		})
	}

	var blogResponse presenter.CreateBlogResponse
	blogResponse.Blog = presenter.BlogResponse{
		ID:        blog.ID,
		Title:     blog.Title,
		Content:   blog.Content,
		Thumbnail: blog.Thumbnail,
		URL:       blog.URL,
		Tags:      tags,
		CreatedAt: blog.CreatedAt.String(),
	}

	return &blogResponse
}

func (p *BlogPresenter) GenerateUpdateResponse(blog *entity.Blog) *presenter.UpdateBlogResponse {
	var tags []presenter.TagResponse

	for _, tag := range blog.Tags {
		tags = append(tags, presenter.TagResponse{
			ID:   tag.ID,
			Name: tag.Name,
		})
	}

	var blogResponse presenter.UpdateBlogResponse
	blogResponse.Blog = presenter.BlogResponse{
		ID:        blog.ID,
		Title:     blog.Title,
		Content:   blog.Content,
		Thumbnail: blog.Thumbnail,
		URL:       blog.URL,
		Tags:      tags,
		CreatedAt: blog.CreatedAt.String(),
	}

	return &blogResponse
}
