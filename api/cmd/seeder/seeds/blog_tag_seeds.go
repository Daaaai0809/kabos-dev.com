package seeds

import (
	"context"
	"errors"

	"github.com/Daaaai0809/kabos-dev.com/models"
	"github.com/uptrace/bun"
)

var blogTagSeeds = []*models.BlogTags{
	{
		BlogID: 1,
		TagID:  1,
	},
	{
		BlogID: 1,
		TagID:  2,
	},
	{
		BlogID: 2,
		TagID:  3,
	},
	{
		BlogID: 2,
		TagID:  4,
	},
}

func GetBlogTagSeeds() []*models.BlogTags {
	return blogTagSeeds
}

func BlogTagSeeds(ctx context.Context, db *bun.DB) error {
	if isExist, err := db.NewSelect().Model(&models.BlogTags{}).Exists(ctx); err != nil {
		return err
	} else if isExist {
		return errors.New("blog_tags already exist")
	}

	if _, err := db.NewInsert().Model(&blogTagSeeds).Exec(ctx); err != nil {
		return err
	}

	return nil
}
