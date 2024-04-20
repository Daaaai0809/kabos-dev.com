package seeds

import (
	"context"
	"errors"
	"time"

	"github.com/Daaaai0809/kabos-dev.com/models"
	"github.com/uptrace/bun"
)

var blogSeeds = []*models.Blog{
	{
		Title:     "[Laravel] Observerで発生したイベントに応じた処理を実装する",
		URL:       "https://zenn.dev/kabos0809/articles/5f05a473183701",
		PostedAt:  time.Date(2023, 7, 30, 0, 0, 0, 0, time.UTC),
	},
	{
		Title:     "[gRPC] メソッドレベルで異なる権限を実装してみる",
		URL:       "https://zenn.dev/kabos0809/articles/5e626851e39c80",
		PostedAt:  time.Date(2023, 8, 17, 0, 0, 0, 0, time.UTC),
	},
}

func GetBlogSeeds() []*models.Blog {
	return blogSeeds
}

func BlogSeeds(ctx context.Context, db *bun.DB) error {
	if isExist, err := db.NewSelect().Model(&models.Blog{}).Exists(ctx); err != nil {
		return err
	} else if isExist {
		return errors.New("blogs already exist")
	}

	if _, err := db.NewInsert().Model(&blogSeeds).Exec(ctx); err != nil {
		return err
	}

	return nil
}
