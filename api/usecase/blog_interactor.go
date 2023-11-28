package usecase

import (
	"context"

	"github.com/Daaaai0809/kabos-dev.com/domain/entity"
	"github.com/Daaaai0809/kabos-dev.com/domain/repository"
	"github.com/Daaaai0809/kabos-dev.com/models"
)

type IBlogInteractor interface {
	GetAll(ctx context.Context) ([]*entity.Blog, error)
	GetSearchedBlog(ctx context.Context, searchWord string) ([]*entity.Blog, error)
	GetByID(ctx context.Context, id int) (*entity.Blog, error)
	Create(ctx context.Context, blog *entity.Blog) error
	Update(ctx context.Context, blog *entity.Blog) error
	Delete(ctx context.Context, id int) error
}

type BlogInteractor struct {
	blogRepository repository.IBlogRepository
	blogTagsRepository repository.IBlogTagsRepository
}

func NewBlogInteractor(blogRepository repository.IBlogRepository, blogTagsRepository repository.IBlogTagsRepository) IBlogInteractor {
	return &BlogInteractor{
		blogRepository: blogRepository,
		blogTagsRepository: blogTagsRepository,
	}
}

func (i *BlogInteractor) GetAll(ctx context.Context) ([]*entity.Blog, error) {
	blogs, err := i.blogRepository.GetAll(ctx)
	if err != nil {
		return nil, err
	}

	var entityBlogs []*entity.Blog
	for _, blog := range blogs {
		entityBlog := blog.ToBlogEntity()
		entityBlogs = append(entityBlogs, entityBlog)
	}

	return entityBlogs, nil
}

func (i *BlogInteractor) GetSearchedBlog(ctx context.Context, searchWord string) ([]*entity.Blog, error) {
	blogs, err := i.blogRepository.GetSearchedBlog(ctx, searchWord)
	if err != nil {
		return nil, err
	}

	var entityBlogs []*entity.Blog
	for _, blog := range blogs {
		entityBlog := blog.ToBlogEntity()
		entityBlogs = append(entityBlogs, entityBlog)
	}

	return entityBlogs, nil
}

func (i *BlogInteractor) GetByID(ctx context.Context, id int) (*entity.Blog, error) {
	blog, err := i.blogRepository.GetByID(ctx, id)
	if err != nil {
		return nil, err
	}

	entityBlog := blog.ToBlogEntity()

	return entityBlog, nil
}

func (i *BlogInteractor) Create(ctx context.Context, blog *entity.Blog) error {
	userModel := models.Blog{
		Title:     blog.Title,
		Thumbnail: blog.Thumbnail,
		URL:       blog.URL,
		Content:   blog.Content,
	}

	if err := i.blogRepository.Create(ctx, &userModel); err != nil {
		return err
	}

	blogTagsModels := []*models.BlogTags{}
	for _, tag := range blog.Tags {
		blogTagsModel := &models.BlogTags{
			BlogID: userModel.ID,
			TagID:  tag.ID,
		}
		blogTagsModels = append(blogTagsModels, blogTagsModel)
	}

	if err := i.blogTagsRepository.Create(ctx, blogTagsModels); err != nil {
		return err
	}

	return nil
}

func (i *BlogInteractor) Update(ctx context.Context, blog *entity.Blog) error {
	userModel := models.Blog{
		ID:        blog.ID,
		Title:     blog.Title,
		Thumbnail: blog.Thumbnail,
		URL:       blog.URL,
		Content:   blog.Content,
	}

	if err := i.blogRepository.Update(ctx, &userModel); err != nil {
		return err
	}

	blogTagsModels := []*models.BlogTags{}
	for _, tag := range blog.Tags {
		blogTagsModel := &models.BlogTags{
			BlogID: userModel.ID,
			TagID:  tag.ID,
		}
		blogTagsModels = append(blogTagsModels, blogTagsModel)
	}

	if err := i.blogTagsRepository.DeleteByBlogID(ctx, userModel.ID); err != nil {
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
