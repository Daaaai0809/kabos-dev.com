package migrations

import (
	"context"
	"fmt"

	"github.com/uptrace/bun"

	"github.com/Daaaai0809/kabos-dev.com/models"
)

func init() {
	Migrations.MustRegister(func(ctx context.Context, db *bun.DB) error {
		fmt.Printf(" [up migration] %s ", "20231216134251_create_product_table.go")
		if _, err := db.NewCreateTable().Model((*models.Product)(nil)).IfNotExists().Exec(ctx); err != nil {
			fmt.Print("[error] \n")
			return err
		}
		fmt.Print(" [done] \n")
		return nil
	}, func(ctx context.Context, db *bun.DB) error {
		fmt.Printf(" [down migration] %s ", "20231216134251_create_product_table.go")
		if _, err := db.NewDropTable().Model((*models.Product)(nil)).IfExists().Exec(ctx); err != nil {
			fmt.Print("[error] \n")
			return err
		}
		fmt.Print(" [done] \n")
		return nil
	})
}
