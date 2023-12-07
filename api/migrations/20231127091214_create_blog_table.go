package migrations

import (
	"context"
	"fmt"

	"github.com/uptrace/bun"
	"github.com/Daaaai0809/kabos-dev.com/models"
)

func init() {
	Migrations.MustRegister(func(ctx context.Context, db *bun.DB) error {
		fmt.Printf(" [up migration] %s\n", "20231127091214_create_blog_table.go")
		db.RegisterModel((*models.BlogTags)(nil))
		db.NewCreateTable().Model((*models.Blog)(nil)).IfNotExists().Exec(ctx)
		return nil
	}, func(ctx context.Context, db *bun.DB) error {
		fmt.Printf(" [down migration] %s\n", "20231127091214_create_blog_table.go")
		db.NewDropTable().Model((*models.Blog)(nil)).IfExists().Exec(ctx)
		return nil
	})
}
