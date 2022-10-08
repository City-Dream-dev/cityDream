package repository

import (
	"errors"
	"log"
	"os"
	"time"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"

	"github.com/City-Dream/backend/services/user/config"
	"github.com/City-Dream/backend/services/user/db/postgreSql/model"
)

var err error

type User struct {
	conn *gorm.DB
}

func (r *User) FindByEmail(email string) *model.User {
	var u model.User
	err := r.getConn().Where("email = ?", email).First(&u).Error

	if errors.Is(err, gorm.ErrRecordNotFound) {
		return nil
	}

	return &u
}

func (r *User) FindByTrelloId(id string) *model.User {
	var u model.User
	q := r.getConn().Debug().Where("trello_id = ?", id)
	err := q.First(&u).Error

	if errors.Is(err, gorm.ErrRecordNotFound) {
		return nil
	}

	return &u
}

func (r *User) getConn() *gorm.DB {
	if r.conn == nil {
		newLogger := logger.New(
			log.New(os.Stdout, "\r\n", log.LstdFlags), // io writer
			logger.Config{
				SlowThreshold:             time.Second,   // Slow SQL threshold
				LogLevel:                  logger.Silent, // Log level
				IgnoreRecordNotFoundError: false,         // Ignore ErrRecordNotFound error for logger
				Colorful:                  false,         // Disable color
			},
		)

		r.conn, err = gorm.Open(postgres.Open(config.FromEnv().DbDSN), &gorm.Config{Logger: newLogger})

		if err != nil {
			panic(err)
		}
	}

	return r.conn
}
