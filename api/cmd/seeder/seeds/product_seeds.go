package seeds

import (
	"context"
	"errors"
	"time"

	"github.com/Daaaai0809/kabos-dev.com/models"
	"github.com/uptrace/bun"
)

const content = `## 使用技術
### Backend
- Golang
   - Echo
   - Bun(ORM)
### FrontEnd
- TypeScript
   - NextJS
   - vanilla-extract
### Infra
- Docker
- Fly.io(API Server)
- Vercel(FrontEnd)
- S3(Storage)
- MySQL
## 説明
自己紹介やブログ・制作物の紹介を兼ねたWebサイトです。  
上記にも記載していますがAPIサーバーにはFly.io、フロントエンドにはVercelを使用しています。  
APIはGolangのEchoで実装されており、実はなんちゃってクリーンアーキテクチャだったりします。  
フロントはNextJSを採用していて、スタイルにはvanilla-extractを導入してみました。Next使うならApp Routerでやってみよかな～と思っていたのですが、あまり乗り気になれず妥協してpages Routerを使っています。  
DBにはMySQLを使用しているのですが、Fly.ioを使うなら正直PostgreSQLの方が良かったと思います。技術選定でちゃんと使用技術固めてから実装始めるべきでした。  
Contactページなどまだ完成にまでは至っていないため随時ページの追加や修正を行っています。`

var productSeeds = []*models.Product{
	{
		Name:        "kabos-dev.com",
		Content:     content,
		Description: "自己紹介やブログ・制作物の紹介を兼ねたWebサイトです。",
		Thumbnail:   "https://kabos-dev-bucket.s3.ap-northeast-1.amazonaws.com/thumbnail/products/product-1.webp",
		URL:         "https://kabos-dev.com",
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
