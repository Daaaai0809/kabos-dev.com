package seeds

import (
	"context"
	"errors"

	"github.com/Daaaai0809/kabos-dev.com/models"
	"github.com/uptrace/bun"
)

var tagSeeds = []*models.Tag{
	{
		Name: "PHP",
	},
	{
		Name: "Laravel",
	},
	{
		Name: "gRPC",
	},
	{
		Name: "gRPC-Web",
	},
}

func GetTagSeeds() []*models.Tag {
	return tagSeeds
}

func TagSeeds(ctx context.Context, db *bun.DB) error {
	if isExist, err := db.NewSelect().Model(&models.Tag{}).Exists(ctx); err != nil {
		return err
	} else if isExist {
		return errors.New("tags already exist")
	}

	if _, err := db.NewInsert().Model(&tagSeeds).Exec(ctx); err != nil {
		return err
	}

	return nil
}
