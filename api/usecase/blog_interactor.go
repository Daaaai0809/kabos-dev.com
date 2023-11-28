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
	userModel := models.Blog{
		Title:     blog.Title,
		Thumbnail: blog.Thumbnail,
		URL:       blog.URL,
		Content:   blog.Content,
	}

	if err := i.blogRepository.Create(ctx, &userModel); err != nil {
		return err
	}

	// TODO: blog_tagsにTagとのリレーションを作成する

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

	// TODO: リレーションの変更を反映する

	return nil
}

func (i *BlogInteractor) Delete(ctx context.Context, id int) error {
	if err := i.blogRepository.Delete(ctx, id); err != nil {
		return err
	}

	// TODO: blog_tagsで該当するblog_idを持つレコードを削除する

	return nil
}
