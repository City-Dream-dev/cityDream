package model

import (
	userModel "github.com/City-Dream/backend/services/user/db/postgreSql/model"
	"github.com/google/uuid"
)

type Dream struct {
	ID          uuid.UUID      `gorm:"primary_key;column:id;type:UUID;"`
	TrelloID    string         `gorm:"column:trello_id;type:TEXT;"`
	Title       string         `gorm:"column:title;type:TEXT;"`
	CoverImage  string         `gorm:"column:cover_image;type:TEXT"`
	Description string         `gorm:"column:description;type:TEXT;"`
	OwnerID     uuid.UUID      `gorm:"column:owner_id;type:UUID;"`
	Owner       userModel.User ``
	ManagerID   uuid.UUID      `gorm:"column:manager_id;type:UUID;"`
	Manager     userModel.User ``
	Status      string         `gorm:"column:status;type:TEXT;"`
}
