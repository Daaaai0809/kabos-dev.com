package usecase

import (
	"context"

	"github.com/Daaaai0809/kabos-dev.com/domain/entity"
	"github.com/Daaaai0809/kabos-dev.com/domain/repository"
	"github.com/Daaaai0809/kabos-dev.com/models"
	"github.com/Daaaai0809/kabos-dev.com/usecase/presenter"
)

type IBlogInteractor interface {
	GetAll(ctx context.Context) (*presenter.GetAllResponse, error)
	GetSearchedBlog(ctx context.Context, searchWord string) (*presenter.GetSearchedBlogResponse, error)
	GetByID(ctx context.Context, id int) (*presenter.GetByIDResponse, error)
	Create(ctx context.Context, blog *entity.Blog) (*presenter.CreateBlogResponse, error)
	Update(ctx context.Context, blog *entity.Blog) (*presenter.UpdateBlogResponse, error)
	Delete(ctx context.Context, id int) error
}

type BlogInteractor struct {
	blogRepository repository.IBlogRepository
	blogTagsRepository repository.IBlogTagsRepository
	blogPresenter presenter.IBlogPresenter
}

func NewBlogInteractor(blogRepository repository.IBlogRepository, blogTagsRepository repository.IBlogTagsRepository, blogPresenter presenter.IBlogPresenter) IBlogInteractor {
	return &BlogInteractor{
		blogRepository: blogRepository,
		blogTagsRepository: blogTagsRepository,
		blogPresenter: blogPresenter,
	}
}

func (i *BlogInteractor) GetAll(ctx context.Context) (*presenter.GetAllBlogResponse, error) {
	blogs, err := i.blogRepository.GetAll(ctx)
	if err != nil {
		return nil, err
	}

	var entityBlogs []*entity.Blog
	for _, blog := range blogs {
		entityBlog := blog.ToBlogEntity()
		entityBlogs = append(entityBlogs, entityBlog)
	}

	return i.blogPresenter.GenerateGetAllResponse(entityBlogs), nil
}

func (i *BlogInteractor) GetSearchedBlog(ctx context.Context, searchWord string) (*presenter.GetSearchedBlogResponse, error) {
	blogs, err := i.blogRepository.GetSearchedBlog(ctx, searchWord)
	if err != nil {
		return nil, err
	}

	var entityBlogs []*entity.Blog
	for _, blog := range blogs {
		entityBlog := blog.ToBlogEntity()
		entityBlogs = append(entityBlogs, entityBlog)
	}

	return i.blogPresenter.GenerateGetSearchedBlogResponse(entityBlogs), nil
}

func (i *BlogInteractor) GetByID(ctx context.Context, id int) (*presenter.GetBlogByIDResponse, error) {
	blog, err := i.blogRepository.GetByID(ctx, id)
	if err != nil {
		return nil, err
	}

	entityBlog := blog.ToBlogEntity()

	return i.blogPresenter.GenerateGetByIDResponse(entityBlog), nil
}

func (i *BlogInteractor) Create(ctx context.Context, blog *entity.Blog) (*presenter.CreateBlogResponse, error) {
	blogModel := models.Blog{
		Title:     blog.Title,
		Thumbnail: blog.Thumbnail,
		URL:       blog.URL,
		Content:   blog.Content,
	}

	if err := i.blogRepository.Create(ctx, &blogModel); err != nil {
		return nil, err
	}

	blogTagsModels := []*models.BlogTags{}
	for _, tag := range blog.Tags {
		blogTagsModel := &models.BlogTags{
			BlogID: blogModel.ID,
			TagID:  tag.ID,
		}
		blogTagsModels = append(blogTagsModels, blogTagsModel)
	}

	if err := i.blogTagsRepository.Create(ctx, blogTagsModels); err != nil {
		return nil, err
	}

	return i.blogPresenter.GenerateCreateResponse(entityBlog), nil
}

func (i *BlogInteractor) Update(ctx context.Context, blog *entity.Blog) error {
	blogModel := models.Blog{
		ID:        blog.ID,
		Title:     blog.Title,
		Thumbnail: blog.Thumbnail,
		URL:       blog.URL,
		Content:   blog.Content,
	}

	if err := i.blogRepository.Update(ctx, &blogModel); err != nil {
		return err
	}

	blogTagsModels := []*models.BlogTags{}
	for _, tag := range blog.Tags {
		blogTagsModel := &models.BlogTags{
			BlogID: blogModel.ID,
			TagID:  tag.ID,
		}
		blogTagsModels = append(blogTagsModels, blogTagsModel)
	}

	if err := i.blogTagsRepository.DeleteByBlogID(ctx, blogModel.ID); err != nil {
		return err
	}

	if err := i.blogTagsRepository.Create(ctx, blogTagsModels); err != nil {
		return err
	}

	return nil
}

func (i *BlogInteractor) Delete(ctx context.Context, id int) error {
	if err := i.blogRepository.Delete(ctx, id); err != nil {
		return err
	}

	if err := i.blogTagsRepository.DeleteByBlogID(ctx, id); err != nil {
		return err
	}

	return nil
}
