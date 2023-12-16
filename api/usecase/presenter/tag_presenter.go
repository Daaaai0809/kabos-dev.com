package presenter

import (
	"github.com/Daaaai0809/kabos-dev.com/domain/entity"
)

type TagResponse struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
}

type GetAllTagResponse struct {
	Tags []TagResponse `json:"tags"`
}

type GetTagByIDResponse struct {
	Tag TagResponse `json:"tag"`
}

type GetTagByNameResponse struct {
	Tags []TagResponse `json:"tags"`
}

type CreateTagResponse struct {
	Tag TagResponse `json:"tag"`
}

type UpdateTagResponse struct {
	Tag TagResponse `json:"tag"`
}

type ITagPresenter interface {
	GenerateGetAllResponse(tags []*entity.Tag) *GetAllTagResponse
	GenerateGetByIDResponse(tag *entity.Tag) *GetTagByIDResponse
	GenerateGetByNameResponse(tags []*entity.Tag) *GetTagByNameResponse
	GenerateCreateResponse(tag *entity.Tag) *CreateTagResponse
	GenerateUpdateResponse(tag *entity.Tag) *UpdateTagResponse
}
