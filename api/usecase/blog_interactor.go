package usecase

import (
	"context"
	"time"

	"github.com/Daaaai0809/kabos-dev.com/config"
	"github.com/Daaaai0809/kabos-dev.com/domain/entity"
	"github.com/Daaaai0809/kabos-dev.com/domain/repository"
	"github.com/Daaaai0809/kabos-dev.com/models"
	"github.com/Daaaai0809/kabos-dev.com/usecase/presenter"
)

type IBlogInteractor interface {
	GetAll(ctx context.Context) (*presenter.GetAllBlogResponse, error)
	GetSearchedBlog(ctx context.Context, searchWord string) (*presenter.GetSearchedBlogResponse, error)
	GetByID(ctx context.Context, id int) (*presenter.GetBlogByIDResponse, error)
	Create(ctx context.Context, blog *entity.Blog) (*presenter.CreateBlogResponse, error)
	Update(ctx context.Context, blog *entity.Blog) (*presenter.UpdateBlogResponse, error)
	Delete(ctx context.Context, id int) error
	GetOriginBlog(ctx context.Context, id int) (*entity.Blog, error)
	FillInUpdateBlog(ctx context.Context, originBlog *entity.Blog, updateBlog *entity.Blog) *entity.Blog
	GenerateBlogEntity(ctx context.Context, id int, title, emoji, url, content, postedAt string, tagIDs []int) (*entity.Blog, error)
}

type BlogInteractor struct {
	blogRepository repository.IBlogRepository
	blogPresenter  presenter.IBlogPresenter
}

func NewBlogInteractor(blogRepository repository.IBlogRepository, blogPresenter presenter.IBlogPresenter) IBlogInteractor {
	return &BlogInteractor{
		blogRepository: blogRepository,
		blogPresenter:  blogPresenter,
	}
}

func (i *BlogInteractor) GetAll(ctx context.Context) (*presenter.GetAllBlogResponse, error) {
	blogs, err := i.blogRepository.GetAll(ctx)
	if err != nil {
		return &presenter.GetAllBlogResponse{}, err
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
		return &presenter.GetSearchedBlogResponse{}, err
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
		return &presenter.GetBlogByIDResponse{}, err
	}

	entityBlog := blog.ToBlogEntity()

	return i.blogPresenter.GenerateGetByIDResponse(entityBlog), nil
}

func (i *BlogInteractor) Create(ctx context.Context, blog *entity.Blog) (*presenter.CreateBlogResponse, error) {
	blogModel := models.NewCreateBlogModel(blog.Title, blog.URL, blog.Emoji, blog.Content, blog.PostedAt)

	id, err := i.blogRepository.Create(ctx, blogModel, blog.TagIDs)
	if err != nil {
		return &presenter.CreateBlogResponse{}, err
	}

	createdBlog, err := i.blogRepository.GetByID(ctx, id)
	if err != nil {
		return &presenter.CreateBlogResponse{}, err
	}

	return i.blogPresenter.GenerateCreateResponse(createdBlog.ToBlogEntity()), nil
}

func (i *BlogInteractor) Update(ctx context.Context, blog *entity.Blog) (*presenter.UpdateBlogResponse, error) {
	blogModel := models.NewBlogModel(
		blog.ID,
		blog.Title,
		blog.URL,
		blog.Emoji,
		blog.Content,
		blog.PostedAt,
		blog.CreatedAt,
		blog.UpdatedAt,
	)

	if err := i.blogRepository.Update(ctx, blogModel, blog.TagIDs); err != nil {
		return &presenter.UpdateBlogResponse{}, err
	}

	updatedBlog, err := i.blogRepository.GetByID(ctx, blogModel.ID)
	if err != nil {
		return &presenter.UpdateBlogResponse{}, err
	}

	return i.blogPresenter.GenerateUpdateResponse(updatedBlog.ToBlogEntity()), nil
}

func (i *BlogInteractor) Delete(ctx context.Context, id int) error {
	if err := i.blogRepository.Delete(ctx, id); err != nil {
		return err
	}

	return nil
}

func (i *BlogInteractor) GetOriginBlog(ctx context.Context, id int) (*entity.Blog, error) {
	blog, err := i.blogRepository.GetByID(ctx, id)
	if err != nil {
		return &entity.Blog{}, err
	}

	entityBlog := blog.ToBlogEntity()

	return entityBlog, nil
}

func (i *BlogInteractor) FillInUpdateBlog(ctx context.Context, originBlog *entity.Blog, updateBlog *entity.Blog) *entity.Blog {
	if updateBlog.Title == "" {
		updateBlog.Title = originBlog.Title
	}

	if updateBlog.URL == "" {
		updateBlog.URL = originBlog.URL
	}

	if updateBlog.Emoji == "" {
		updateBlog.Emoji = originBlog.Emoji
	}

	if updateBlog.Content == "" {
		updateBlog.Content = originBlog.Content
	}

	if len(updateBlog.TagIDs) == 0 {
		updateBlog.TagIDs = originBlog.TagIDs
	}

	updateBlog.CreatedAt = originBlog.CreatedAt
	updateBlog.UpdatedAt = originBlog.UpdatedAt

	return updateBlog
}

func (i *BlogInteractor) GenerateBlogEntity(ctx context.Context, id int, title, emoji, url, content, postedAt string, tagIDs []int) (*entity.Blog, error) {
	var formatedPostedAt time.Time
	if postedAt != "" {
		var err error
		formatedPostedAt, err = config.FormatDateFromString(postedAt)
		if err != nil {
			return &entity.Blog{}, err
		}
	} else {
		formatedPostedAt = time.Now()
	}

	blog := &entity.Blog{
		ID:       id,
		Title:    title,
		URL:      url,
		Content:  content,
		Emoji:    emoji,
		PostedAt: formatedPostedAt,
		TagIDs:   tagIDs,
	}

	return blog, nil
}
