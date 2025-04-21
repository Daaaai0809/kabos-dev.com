package migrations

import (
	"context"
	"fmt"

	"github.com/Daaaai0809/kabos-dev.com/models"

	"github.com/uptrace/bun"
)

func init() {
	Migrations.MustRegister(func(ctx context.Context, db *bun.DB) error {
		fmt.Print(" [up migration] ")
		if _, err := db.NewAddColumn().Model((*models.Blog)(nil)).ColumnExpr("content TEXT").Exec(ctx); err != nil {
			fmt.Print("[error] \n")
			return err
		}
		return nil
	}, func(ctx context.Context, db *bun.DB) error {
		fmt.Print(" [down migration] ")
		if _, err := db.NewDropColumn().Model((*models.Blog)(nil)).Column("content").Exec(ctx); err != nil {
			fmt.Print("[error] \n")
			return err
		}
		return nil
	})
}
