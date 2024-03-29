package entity

import (
	"time"
)

type Tag struct {
	ID        int       `json:"id"`
	Name      string    `json:"name"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

func NewTagEntity(id int, name string, createdAt, updatedAt time.Time) *Tag {
	return &Tag{
		ID:        id,
		Name:      name,
		CreatedAt: createdAt,
		UpdatedAt: updatedAt,
	}
}
