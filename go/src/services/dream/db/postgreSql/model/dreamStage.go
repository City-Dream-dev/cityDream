package model

import "database/sql"

type DreamStage struct {
	ID       string         `gorm:"primary_key;column:id;type:UUID;"`
	TrelloID sql.NullString `gorm:"column:trello_id;type:TEXT;"`
	Name     sql.NullString `gorm:"column:name;type:TEXT;"`
	DreamID  string         `gorm:"column:dream_id;type:UUID;"`
}
