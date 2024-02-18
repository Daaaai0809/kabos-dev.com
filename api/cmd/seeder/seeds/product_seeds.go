package seeds

import (
	"context"
	"errors"
	"time"

	"github.com/uptrace/bun"
	"github.com/Daaaai0809/kabos-dev.com/models"
)

var productSeeds = []*models.Product{
	{
		Name: "kabos-dev.com",
		Content: "ポートフォリオサイト",
		Thumbnail: "https://kabos-dev-bucket.s3.ap-northeast-1.amazonaws.com/thumbnail/products/product-1.webp",
		URL: "https://kabos-dev.com",
		ReleaseDate: time.Date(2024, 2, 12, 0, 0, 0, 0, time.UTC),
	},
}

func GetProductSeeds() []*models.Product {
	return productSeeds
}

func ProductSeeds(ctx context.Context, db *bun.DB) error {
	if isExist, err := db.NewSelect().Model(&models.Product{}).Exists(ctx); err != nil {
		return err
	} else if isExist {
		return errors.New("products already exist")
	}

	if _, err := db.NewInsert().Model(&productSeeds).Exec(ctx); err != nil {
		return err
	}

	return nil
}
