package migrations

import (
	"context"
	"fmt"

	"github.com/uptrace/bun"
	"github.com/Daaaai0809/kabos-dev.com/models"
)

func init() {
	Migrations.MustRegister(func(ctx context.Context, db *bun.DB) error {
		fmt.Printf(" [up migration] %s\n", "20231127091046_create_blog_tags_table.go")
		if _, err := db.NewCreateTable().Model((*models.BlogTags)(nil)).IfNotExists().Exec(ctx); err != nil {
			return err
		}
		return nil
	}, func(ctx context.Context, db *bun.DB) error {
		fmt.Printf(" [down migration] %s\n", "20231127091046_create_blog_tags_table.go")
		if _, err := db.NewDropTable().Model((*models.BlogTags)(nil)).IfExists().Exec(ctx); err != nil {
			return err
		}
		return nil
	})
}
