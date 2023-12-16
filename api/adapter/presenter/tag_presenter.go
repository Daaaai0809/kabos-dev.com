package presenter

import (
	"github.com/Daaaai0809/kabos-dev.com/domain/entity"
	"github.com/Daaaai0809/kabos-dev.com/usecase/presenter"
)

type TagPresenter struct{}

func NewTagPresenter() presenter.ITagPresenter {
	return &TagPresenter{}
}

func (p *TagPresenter) GenerateGetAllResponse(tags []*entity.Tag) *presenter.GetAllTagResponse {
	var tagsResponse presenter.GetAllTagResponse
	for _, tag := range tags {
		tagsResponse.Tags = append(tagsResponse.Tags, presenter.TagResponse{
			ID:   tag.ID,
			Name: tag.Name,
		})
	}

	return &tagsResponse
}

func (p *TagPresenter) GenerateGetByIDResponse(tag *entity.Tag) *presenter.GetTagByIDResponse {
	var tagResponse presenter.GetTagByIDResponse
	tagResponse.Tag = presenter.TagResponse{
		ID:   tag.ID,
		Name: tag.Name,
	}

	return &tagResponse
}

func (p *TagPresenter) GenerateGetByNameResponse(tags []*entity.Tag) *presenter.GetTagByNameResponse {
	var tagsResponse presenter.GetTagByNameResponse
	for _, tag := range tags {
		tagsResponse.Tags = append(tagsResponse.Tags, presenter.TagResponse{
			ID:   tag.ID,
			Name: tag.Name,
		})
	}

	return &tagsResponse
}

func (p *TagPresenter) GenerateCreateResponse(tag *entity.Tag) *presenter.CreateTagResponse {
	var tagResponse presenter.CreateTagResponse
	tagResponse.Tag = presenter.TagResponse{
		ID:   tag.ID,
		Name: tag.Name,
	}

	return &tagResponse
}

func (p *TagPresenter) GenerateUpdateResponse(tag *entity.Tag) *presenter.UpdateTagResponse {
	var tagResponse presenter.UpdateTagResponse
	tagResponse.Tag = presenter.TagResponse{
		ID:   tag.ID,
		Name: tag.Name,
	}

	return &tagResponse
}

