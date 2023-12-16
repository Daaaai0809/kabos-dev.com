package usecase

import (
	"context"

	"github.com/Daaaai0809/kabos-dev.com/domain/entity"
	"github.com/Daaaai0809/kabos-dev.com/domain/repository"
	"github.com/Daaaai0809/kabos-dev.com/models"
	"github.com/Daaaai0809/kabos-dev.com/usecase/presenter"
)

type ITagInteractor interface {
	GetAll(ctx context.Context) (*presenter.GetAllTagResponse, error)
	GetByID(ctx context.Context, id int) (*presenter.GetTagByIDResponse, error)
	GetByName(ctx context.Context, name string) (*presenter.GetTagByNameResponse, error)
	Create(ctx context.Context, tag *entity.Tag) (error)
	Update(ctx context.Context, tag *entity.Tag) (error)
	Delete(ctx context.Context, id int) error
}

type TagInteractor struct {
	tagRepository repository.ITagRepository
	blogTagsRepository repository.IBlogTagsRepository
	tagPresenter presenter.ITagPresenter
}

func NewTagInteractor(tagRepository repository.ITagRepository, blogTagsRepository repository.IBlogTagsRepository, tagPresenter presenter.ITagPresenter) ITagInteractor {
	return &TagInteractor{
		tagRepository: tagRepository,
		blogTagsRepository: blogTagsRepository,
		tagPresenter: tagPresenter,
	}
}

func (i *TagInteractor) GetAll(ctx context.Context) (*presenter.GetAllTagResponse, error) {
	tags, err := i.tagRepository.GetAll(ctx)
	if err != nil {
		return &presenter.GetAllTagResponse{}, err
	}

	var entityTags []*entity.Tag
	for _, tag := range tags {
		entityTag := tag.ToTagEntity()
		entityTags = append(entityTags, entityTag)
	}

	return i.tagPresenter.GenerateGetAllResponse(entityTags), nil
}

func (i *TagInteractor) GetByID(ctx context.Context, id int) (*presenter.GetTagByIDResponse, error) {
	tag, err := i.tagRepository.GetByID(ctx, id)
	if err != nil {
		return &presenter.GetTagByIDResponse{}, err
	}

	entityTag := tag.ToTagEntity()

	return i.tagPresenter.GenerateGetByIDResponse(entityTag), nil
}

func (i *TagInteractor) GetByName(ctx context.Context, name string) (*presenter.GetTagByNameResponse, error) {
	tags, err := i.tagRepository.GetByName(ctx, name)
	if err != nil {
		return &presenter.GetTagByNameResponse{}, err
	}

	var entityTags []*entity.Tag
	for _, tag := range tags {
		entityTag := tag.ToTagEntity()
		entityTags = append(entityTags, entityTag)
	}

	return i.tagPresenter.GenerateGetByNameResponse(entityTags), nil
}

func (i *TagInteractor) Create(ctx context.Context, tag *entity.Tag) error {
	tagModel := &models.Tag{
		Name: tag.Name,
	}

	if err := i.tagRepository.Create(ctx, tagModel); err != nil {
		return err
	}

	return nil
}

func (i *TagInteractor) Update(ctx context.Context, tag *entity.Tag) error {
	tagModel := &models.Tag{
		ID:   tag.ID,
		Name: tag.Name,
	}

	if err := i.tagRepository.Update(ctx, tagModel); err != nil {
		return err
	}

	return nil
}

func (i *TagInteractor) Delete(ctx context.Context, id int) error {
	if err := i.tagRepository.Delete(ctx, id); err != nil {
		return err
	}

	if err := i.blogTagsRepository.DeleteByTagID(ctx, id); err != nil {
		return err
	}

	return nil
}
