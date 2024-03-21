package usecase_test

import (
	"context"
	"errors"
	"testing"
	"time"

	"github.com/Daaaai0809/kabos-dev.com/domain/entity"
	"github.com/Daaaai0809/kabos-dev.com/models"
	"github.com/Daaaai0809/kabos-dev.com/usecase"
	"github.com/Daaaai0809/kabos-dev.com/usecase/presenter"

	"github.com/stretchr/testify/assert"
)

const (
	GetAllFailedValue          = "get all failed"
	GetSearchedBlogFailedValue = "get searched blog failed"
	GetByIDFailedValue         = "get by id failed"
	CreateFailedValue          = "create failed"
	UpdateFailedValue          = "update failed"
	DeleteFailedValue          = "delete failed"
)

func Test_GetAll_Success(t *testing.T) {
	ctx := context.Background()

	blogPresenter := &MockBlogPresenter{}
	blogRepository := &MockBlogRepository{}
	blogTagsRepository := &MockBlogTagsRepository{}

	blogInteractor := usecase.NewBlogInteractor(blogRepository, blogTagsRepository, blogPresenter)

	expected := &presenter.GetAllBlogResponse{}

	res, err := blogInteractor.GetAll(ctx)
	assert.NoError(t, err)
	assert.Equal(t, expected, res)
}

func Test_GetAll_Failed(t *testing.T) {
	ctx := context.WithValue(context.Background(), "GetAllFailedValue", GetAllFailedValue)

	blogPresenter := &MockBlogPresenter{}
	blogRepository := &MockBlogRepository{}
	blogTagsRepository := &MockBlogTagsRepository{}

	blogInteractor := usecase.NewBlogInteractor(blogRepository, blogTagsRepository, blogPresenter)

	expected := &presenter.GetAllBlogResponse{}

	res, err := blogInteractor.GetAll(ctx)
	assert.Error(t, err)
	assert.Equal(t, expected, res)
}

func Test_GetSearchedBlog_Success(t *testing.T) {
	ctx := context.Background()

	blogPresenter := &MockBlogPresenter{}
	blogRepository := &MockBlogRepository{}
	blogTagsRepository := &MockBlogTagsRepository{}

	blogInteractor := usecase.NewBlogInteractor(blogRepository, blogTagsRepository, blogPresenter)

	expected := &presenter.GetSearchedBlogResponse{}

	res, err := blogInteractor.GetSearchedBlog(ctx, "searchWord")
	assert.NoError(t, err)
	assert.Equal(t, expected, res)
}

func Test_GetSearchedBlog_Failed(t *testing.T) {
	ctx := context.WithValue(context.Background(), "GetSearchedBlogFailedValue", GetSearchedBlogFailedValue)

	blogPresenter := &MockBlogPresenter{}
	blogRepository := &MockBlogRepository{}
	blogTagsRepository := &MockBlogTagsRepository{}

	blogInteractor := usecase.NewBlogInteractor(blogRepository, blogTagsRepository, blogPresenter)

	expected := &presenter.GetSearchedBlogResponse{}

	res, err := blogInteractor.GetSearchedBlog(ctx, "searchWord")
	assert.Error(t, err)
	assert.Equal(t, expected, res)
}

func Test_GetByID_Success(t *testing.T) {
	ctx := context.Background()

	blogPresenter := &MockBlogPresenter{}
	blogRepository := &MockBlogRepository{}
	blogTagsRepository := &MockBlogTagsRepository{}

	blogInteractor := usecase.NewBlogInteractor(blogRepository, blogTagsRepository, blogPresenter)

	expected := &presenter.GetBlogByIDResponse{}

	res, err := blogInteractor.GetByID(ctx, 1)
	assert.NoError(t, err)
	assert.Equal(t, expected, res)
}

func Test_GetByID_Failed(t *testing.T) {
	ctx := context.WithValue(context.Background(), "GetByIDFailedValue", GetByIDFailedValue)

	blogPresenter := &MockBlogPresenter{}
	blogRepository := &MockBlogRepository{}
	blogTagsRepository := &MockBlogTagsRepository{}

	blogInteractor := usecase.NewBlogInteractor(blogRepository, blogTagsRepository, blogPresenter)

	expected := &presenter.GetBlogByIDResponse{}

	res, err := blogInteractor.GetByID(ctx, 1)
	assert.Error(t, err)
	assert.Equal(t, expected, res)
}

func Test_Create_Success(t *testing.T) {
	ctx := context.Background()

	blogPresenter := &MockBlogPresenter{}
	blogRepository := &MockBlogRepository{}
	blogTagsRepository := &MockBlogTagsRepository{}

	blogInteractor := usecase.NewBlogInteractor(blogRepository, blogTagsRepository, blogPresenter)

	expected := &presenter.CreateBlogResponse{}

	res, err := blogInteractor.Create(ctx, &entity.Blog{})
	assert.NoError(t, err)
	assert.Equal(t, expected, res)
}

func Test_Create_Failed(t *testing.T) {
	ctx := context.WithValue(context.Background(), "CreateFailedValue", CreateFailedValue)

	blogPresenter := &MockBlogPresenter{}
	blogRepository := &MockBlogRepository{}
	blogTagsRepository := &MockBlogTagsRepository{}

	blogInteractor := usecase.NewBlogInteractor(blogRepository, blogTagsRepository, blogPresenter)

	expected := &presenter.CreateBlogResponse{}

	res, err := blogInteractor.Create(ctx, &entity.Blog{})
	assert.Error(t, err)
	assert.Equal(t, expected, res)
}

func Test_Update_Success(t *testing.T) {
	ctx := context.Background()

	blogPresenter := &MockBlogPresenter{}
	blogRepository := &MockBlogRepository{}
	blogTagsRepository := &MockBlogTagsRepository{}

	blogInteractor := usecase.NewBlogInteractor(blogRepository, blogTagsRepository, blogPresenter)

	expected := &presenter.UpdateBlogResponse{}

	res, err := blogInteractor.Update(ctx, &entity.Blog{})
	assert.NoError(t, err)
	assert.Equal(t, expected, res)
}

func Test_Update_Failed(t *testing.T) {
	ctx := context.WithValue(context.Background(), "UpdateFailedValue", UpdateFailedValue)

	blogPresenter := &MockBlogPresenter{}
	blogRepository := &MockBlogRepository{}
	blogTagsRepository := &MockBlogTagsRepository{}

	blogInteractor := usecase.NewBlogInteractor(blogRepository, blogTagsRepository, blogPresenter)

	expected := &presenter.UpdateBlogResponse{}

	res, err := blogInteractor.Update(ctx, &entity.Blog{})
	assert.Error(t, err)
	assert.Equal(t, expected, res)
}

func Test_Delete_Success(t *testing.T) {
	ctx := context.Background()

	blogPresenter := &MockBlogPresenter{}
	blogRepository := &MockBlogRepository{}
	blogTagsRepository := &MockBlogTagsRepository{}

	blogInteractor := usecase.NewBlogInteractor(blogRepository, blogTagsRepository, blogPresenter)

	err := blogInteractor.Delete(ctx, 1)
	assert.NoError(t, err)
}

func Test_Delete_Failed(t *testing.T) {
	ctx := context.WithValue(context.Background(), "DeleteFailedValue", DeleteFailedValue)

	blogPresenter := &MockBlogPresenter{}
	blogRepository := &MockBlogRepository{}
	blogTagsRepository := &MockBlogTagsRepository{}

	blogInteractor := usecase.NewBlogInteractor(blogRepository, blogTagsRepository, blogPresenter)

	err := blogInteractor.Delete(ctx, 1)
	assert.Error(t, err)
}

type MockBlogPresenter struct{}

func (m *MockBlogPresenter) GenerateGetAllResponse(blogs []*entity.Blog) *presenter.GetAllBlogResponse {
	return &presenter.GetAllBlogResponse{}
}

func (m *MockBlogPresenter) GenerateGetSearchedBlogResponse(blogs []*entity.Blog) *presenter.GetSearchedBlogResponse {
	return &presenter.GetSearchedBlogResponse{}
}

func (m *MockBlogPresenter) GenerateGetByIDResponse(blog *entity.Blog) *presenter.GetBlogByIDResponse {
	return &presenter.GetBlogByIDResponse{}
}

func (m *MockBlogPresenter) GenerateCreateResponse(blog *entity.Blog) *presenter.CreateBlogResponse {
	return &presenter.CreateBlogResponse{}
}

func (m *MockBlogPresenter) GenerateUpdateResponse(blog *entity.Blog) *presenter.UpdateBlogResponse {
	return &presenter.UpdateBlogResponse{}
}

type MockBlogRepository struct{}

func (m *MockBlogRepository) GetAll(ctx context.Context) ([]*models.Blog, error) {
	if ctx.Value("GetAllFailedValue") == GetAllFailedValue {
		return nil, errors.New("get all failed")
	}

	blogs := []*models.Blog{
		{
			ID:        1,
			Title:     "title",
			Thumbnail: "thumbnail",
			URL:       "url",
			PostedAt:  time.Time{},
			CreatedAt: time.Time{},
		},
		{
			ID:        2,
			Title:     "title",
			Thumbnail: "thumbnail",
			URL:       "url",
			PostedAt:  time.Time{},
			CreatedAt: time.Time{},
		},
	}

	return blogs, nil
}

func (m *MockBlogRepository) GetSearchedBlog(ctx context.Context, searchWord string) ([]*models.Blog, error) {
	if ctx.Value("GetSearchedBlogFailedValue") == GetSearchedBlogFailedValue {
		return nil, errors.New("get searched blog failed")
	}

	blogs := []*models.Blog{
		{
			ID:        1,
			Title:     "title",
			Thumbnail: "thumbnail",
			URL:       "url",
			PostedAt:  time.Time{},
			CreatedAt: time.Time{},
		},
		{
			ID:        2,
			Title:     "title",
			Thumbnail: "thumbnail",
			URL:       "url",
			PostedAt:  time.Time{},
			CreatedAt: time.Time{},
		},
	}

	return blogs, nil
}

func (m *MockBlogRepository) GetByID(ctx context.Context, id int) (*models.Blog, error) {
	if ctx.Value("GetByIDFailedValue") == GetByIDFailedValue {
		return nil, errors.New("get by id failed")
	}

	blog := &models.Blog{
		ID:        1,
		Title:     "title",
		Thumbnail: "thumbnail",
		URL:       "url",
		PostedAt:  time.Time{},
		CreatedAt: time.Time{},
	}

	return blog, nil
}

func (m *MockBlogRepository) Create(ctx context.Context, blog *models.Blog) (int, error) {
	if ctx.Value("CreateFailedValue") == CreateFailedValue {
		return 0, errors.New("create failed")
	}

	return 1, nil
}

func (m *MockBlogRepository) Update(ctx context.Context, blog *models.Blog) error {
	if ctx.Value("UpdateFailedValue") == UpdateFailedValue {
		return errors.New("update failed")
	}

	return nil
}

func (m *MockBlogRepository) Delete(ctx context.Context, id int) error {
	if ctx.Value("DeleteFailedValue") == DeleteFailedValue {
		return errors.New("delete failed")
	}

	return nil
}

type MockBlogTagsRepository struct{}

func (m *MockBlogTagsRepository) Create(ctx context.Context, blogTags []*models.BlogTags) error {
	if ctx.Value("CreateFailedValue") == CreateFailedValue {
		return errors.New("create failed")
	}

	return nil
}

func (m *MockBlogTagsRepository) DeleteByBlogID(ctx context.Context, blogID int) error {
	if ctx.Value("DeleteFailedValue") == DeleteFailedValue {
		return errors.New("delete failed")
	}

	return nil
}

func (m *MockBlogTagsRepository) DeleteByTagID(ctx context.Context, tagID int) error {
	if ctx.Value("DeleteFailedValue") == DeleteFailedValue {
		return errors.New("delete failed")
	}

	return nil
}
