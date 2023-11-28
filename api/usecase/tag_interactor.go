package usecase

import (
	"context"

	"github.com/Daaaai0809/kabos-dev.com/domain/entity"
	"github.com/Daaaai0809/kabos-dev.com/domain/repository"
	"github.com/Daaaai0809/kabos-dev.com/models"
)

type ITagInteractor interface {
	GetAll(ctx context.Context) ([]*entity.Tag, error)
	GetByID(ctx context.Context, id int) (*entity.Tag, error)
	GetByName(ctx context.Context, name string) ([]*entity.Tag, error)
	Create(ctx context.Context, tag *entity.Tag) error
	Update(ctx context.Context, tag *entity.Tag) error
	Delete(ctx context.Context, id int) error
}

type TagInteractor struct {
	tagRepository repository.ITagRepository
	blogTagsRepository repository.IBlogTagsRepository
}

func NewTagInteractor(tagRepository repository.ITagRepository, blogTagsRepository repository.IBlogTagsRepository) ITagInteractor {
	return &TagInteractor{
		tagRepository: tagRepository,
		blogTagsRepository: blogTagsRepository,
	}
}

func (i *TagInteractor) GetAll(ctx context.Context) ([]*entity.Tag, error) {
	tags, err := i.tagRepository.GetAll(ctx)
	if err != nil {
		return nil, err
	}

	var entityTags []*entity.Tag
	for _, tag := range tags {
		entityTag := tag.ToTagEntity()
		entityTags = append(entityTags, entityTag)
	}

	return entityTags, nil
}

func (i *TagInteractor) GetByID(ctx context.Context, id int) (*entity.Tag, error) {
	tag, err := i.tagRepository.GetByID(ctx, id)
	if err != nil {
		return nil, err
	}

	entityTag := tag.ToTagEntity()

	return entityTag, nil
}

func (i *TagInteractor) GetByName(ctx context.Context, name string) ([]*entity.Tag, error) {
	tags, err := i.tagRepository.GetByName(ctx, name)
	if err != nil {
		return nil, err
	}

	var entityTags []*entity.Tag
	for _, tag := range tags {
		entityTag := tag.ToTagEntity()
		entityTags = append(entityTags, entityTag)
	}

	return entityTags, nil
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
