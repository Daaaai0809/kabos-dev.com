package main

import (
	"context"
	"log"

	"github.com/uptrace/bun"
	"github.com/uptrace/bun/dialect/mysqldialect"

	"github.com/Daaaai0809/kabos-dev.com/cmd/seeder/seeds"
	"github.com/Daaaai0809/kabos-dev.com/config"
	infra "github.com/Daaaai0809/kabos-dev.com/infra/mysql"
	"github.com/Daaaai0809/kabos-dev.com/models"
)

func main() {
	err := config.ValidateDBEnv()
	if err != nil {
		panic(err)
	}
	db, err := infra.ConnectDB("localhost")
	if err != nil {
		log.Printf("failed to connect db: %v", err)
		return
	}

	bunDB := bun.NewDB(db, mysqldialect.New())
	bunDB.RegisterModel((*models.BlogTags)(nil), (*models.Blog)(nil), (*models.Tag)(nil), (*models.Product)(nil))
	defer bunDB.Close()

	if err := seed(context.Background(), bunDB); err != nil {
		log.Printf("failed to seed: %v", err)
		return
	}

	log.Printf("seeding is done")
}

func seed(ctx context.Context, db *bun.DB) error {
	// add seeders here
	if err := seeds.BlogSeeds(ctx, db); err != nil {
		return err
	}

	return nil
}
