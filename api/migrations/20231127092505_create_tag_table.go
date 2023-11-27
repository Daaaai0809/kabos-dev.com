package migrations

import (
	"context"
	"fmt"

	"github.com/uptrace/bun"
	"github.com/Daaaai0809/kabos-dev.com/models"
)

func init() {
	Migrations.MustRegister(func(ctx context.Context, db *bun.DB) error {
		fmt.Print(" [up migration] ")
		db.NewCreateTable().Model((*models.Tag)(nil)).IfNotExists().Exec(ctx)
		return nil
	}, func(ctx context.Context, db *bun.DB) error {
		fmt.Print(" [down migration] ")
		db.NewDropTable().Model((*models.Tag)(nil)).IfExists().Exec(ctx)
		return nil
	})
}
