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
		Content: "# ポートフォリオサイト \n ## 使用技術 \n ### Backend \n - Golang \n   - Echo \n   - Bun(ORM) \n ### FrontEnd \n - TypeScript \n   - NextJS \n   - vanilla-extract \n ### Infra \n - Docker \n - Fly.io(API Server) \n - Vercel(FrontEnd) \n - S3(Storage) \n ## 説明 \n 自己紹介やブログ・制作物の紹介を兼ねたWebサイトです。",
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
