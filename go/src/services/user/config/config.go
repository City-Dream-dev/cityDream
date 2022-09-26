package config

import (
	"github.com/caarlos0/env/v6"
	"github.com/joho/godotenv"
	"sync"
)

type Config struct {
	DbDSN string `env:"DB_USER,required" envDefault:"postgres://postgres:pass@127.0.0.1:5454/city-dream?sslmode=disable&search_path=pg_catalog,public,user_service,dream_service"`
}

var (
	readConfigOnce sync.Once
	cfg            *Config
)

func FromEnv() *Config {
	readConfigOnce.Do(func() {
		godotenv.Load()
		cfg = &Config{}
		if err := env.Parse(cfg); err != nil {
			panic(err)
		}
	})

	return cfg
}
