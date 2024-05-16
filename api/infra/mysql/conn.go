package mysql

import (
	"database/sql"
	"fmt"

	"github.com/Daaaai0809/kabos-dev.com/config"
	"github.com/go-sql-driver/mysql"
)

const (
	DRIVER = "mysql"
	NET    = "tcp"
)

func ConnectDB(host interface{}) (*sql.DB, error) {
	var dbHost string
	if host == nil {
		dbHost = config.MYSQL_HOST
	} else {
		dbHost = host.(string)
	}

	c := mysql.Config{
		User:                 config.MYSQL_USER,
		Passwd:               config.MYSQL_PASSWORD,
		Net:                  NET,
		Addr:                 fmt.Sprintf("%s:%s", dbHost, config.MYSQL_PORT),
		DBName:               config.MYSQL_DATABASE,
		AllowNativePasswords: true,
		ParseTime:            true,
		Params: map[string]string{
			"charset": "utf8mb4",
		},
	}

	db, err := sql.Open(DRIVER, c.FormatDSN())
	if err != nil {
		return nil, err
	}
	return db, nil
}
