package config

import (
	"fmt"
	"os"
)

// REQUIRED ENV
const (
	_MYSQL_ROOT_PASSWORD         = "MYSQL_ROOT_PASSWORD"
	_MYSQL_DATABASE              = "MYSQL_DATABASE"
	_MYSQL_USER                  = "MYSQL_USER"
	_MYSQL_PASSWORD              = "MYSQL_PASSWORD"
	_MYSQL_HOST                  = "MYSQL_HOST"
	_MYSQL_PORT                  = "MYSQL_PORT"
	_ENV                         = "ENV"
	_JWT_SECRET                  = "JWT_SECRET"
	_PASSWORD                    = "PASSWORD"
	_HASH_COST                   = "HASH_COST"
	_ISS                         = "ISS"
	_ACCESS_CONTROL_ALLOW_ORIGIN = "ACCESS_CONTROL_ALLOW_ORIGIN"
)

var (
	MYSQL_ROOT_PASSWORD         = os.Getenv(_MYSQL_ROOT_PASSWORD)
	MYSQL_DATABASE              = os.Getenv(_MYSQL_DATABASE)
	MYSQL_USER                  = os.Getenv(_MYSQL_USER)
	MYSQL_PASSWORD              = os.Getenv(_MYSQL_PASSWORD)
	MYSQL_HOST                  = os.Getenv(_MYSQL_HOST)
	MYSQL_PORT                  = os.Getenv(_MYSQL_PORT)
	ENV                         = os.Getenv(_ENV)
	JWT_SECRET                  = os.Getenv(_JWT_SECRET)
	PASSWORD                    = os.Getenv(_PASSWORD)
	HASH_COST                   = os.Getenv(_HASH_COST)
	ISS                         = os.Getenv(_ISS)
	ACCESS_CONTROL_ALLOW_ORIGIN = os.Getenv(_ACCESS_CONTROL_ALLOW_ORIGIN)

	IsDev = ENV == "development"

	requiredDBEnv = []string{
		_MYSQL_ROOT_PASSWORD,
		_MYSQL_DATABASE,
		_MYSQL_USER,
		_MYSQL_PASSWORD,
	}
	requiredAppEnv = []string{
		_MYSQL_ROOT_PASSWORD,
		_MYSQL_DATABASE,
		_MYSQL_USER,
		_MYSQL_PASSWORD,
		_ENV,
		_JWT_SECRET,
		_PASSWORD,
		_HASH_COST,
		_ISS,
		_ACCESS_CONTROL_ALLOW_ORIGIN,
	}
)

func ValidateDBEnv() error {
	for _, env := range requiredDBEnv {
		if os.Getenv(env) == "" {
			return fmt.Errorf("%s is not set", env)
		}
	}

	return nil
}

func ValidateAppEnv() error {
	for _, env := range requiredAppEnv {
		if os.Getenv(env) == "" {
			return fmt.Errorf("%s is not set", env)
		}
	}

	return nil
}

func GetEnv(name string, defaultValue string) string {
	if os.Getenv(name) == "" {
		return defaultValue
	}

	return os.Getenv(name)
}

func GetEnvStrict(name string, err error) {
	if os.Getenv(name) == "" {
		panic(err)
	}
}
