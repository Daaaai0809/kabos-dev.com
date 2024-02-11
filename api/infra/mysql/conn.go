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

func ConnectDB() (*sql.DB, error) {
	c := mysql.Config{
		User:                 config.MYSQL_USER,
		Passwd:               config.MYSQL_PASSWORD,
		Net:                  NET,
		Addr:                 fmt.Sprintf("%s:%s", config.MYSQL_HOST, config.MYSQL_PORT),
		DBName:               config.MYSQL_DATABASE,
		AllowNativePasswords: true,
		ParseTime:            true,
	}

	db, err := sql.Open(DRIVER, c.FormatDSN())
	if err != nil {
		return nil, err
	}
	return db, nil
}
