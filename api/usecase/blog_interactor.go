package usecase

import (
	"context"

	"github.com/Daaaai0809/kabos-dev.com/domain/entity"
	"github.com/Daaaai0809/kabos-dev.com/domain/repository"
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
}

func NewBlogInteractor(blogRepository repository.IBlogRepository) IBlogInteractor {
	return &BlogInteractor{blogRepository: blogRepository}
}

func (i *BlogInteractor) GetAll(ctx context.Context) ([]*entity.Blog, error) {
	blogs, err := i.blogRepository.GetAll(ctx)
	if err != nil {
		return nil, err
	}

	var entityBlogs []*entity.Blog
	for _, blog := range blogs {
		entityBlog := blog.ToUserEntity()
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
		entityBlog := blog.ToUserEntity()
		entityBlogs = append(entityBlogs, entityBlog)
	}

	return entityBlogs, nil
}

func (i *BlogInteractor) GetByID(ctx context.Context, id int) (*entity.Blog, error) {
	blog, err := i.blogRepository.GetByID(ctx, id)
	if err != nil {
		return nil, err
	}

	entityBlog := blog.ToUserEntity()

	return entityBlog, nil
}

func (i *BlogInteractor) Create(ctx context.Context, blog *entity.Blog) error {
	return nil
}

func (i *BlogInteractor) Update(ctx context.Context, blog *entity.Blog) error {
	return nil
}

func (i *BlogInteractor) Delete(ctx context.Context, id int) error {
	return nil
}
