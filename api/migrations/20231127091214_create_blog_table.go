package migrations

import (
	"context"
	"fmt"

	"github.com/Daaaai0809/kabos-dev.com/models"
	"github.com/uptrace/bun"
)

func init() {
	Migrations.MustRegister(func(ctx context.Context, db *bun.DB) error {
		fmt.Printf(" [up migration] %s ", "20231127091214_create_blog_table.go")
		if _, err := db.NewCreateTable().Model((*models.Blog)(nil)).IfNotExists().Exec(ctx); err != nil {
			fmt.Print("[error] \n")
			return err
		}
		fmt.Print(" [done] \n")
		return nil
	}, func(ctx context.Context, db *bun.DB) error {
		fmt.Printf(" [down migration] %s ", "20231127091214_create_blog_table.go")
		if _, err := db.NewDropTable().Model((*models.Blog)(nil)).IfExists().Exec(ctx); err != nil {
			fmt.Print("[error] \n")
			return err
		}
		fmt.Print(" [done] \n")
		return nil
	})
}
