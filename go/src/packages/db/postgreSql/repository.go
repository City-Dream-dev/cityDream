package postgreSql

import "gorm.io/gorm"

type Repository struct {
	*gorm.DB
}

func New(db *gorm.DB, entity string) Repository {
	return Repository{db}
}
