package model

import (
	"database/sql"
	"github.com/google/uuid"
	"github.com/lib/pq"
)

type User struct {
	ID        uuid.UUID      `gorm:"primary_key;column:id;type:UUID;"`
	FbID      sql.NullString `gorm:"column:fb_id;type:TEXT;"`
	TgID      sql.NullString `gorm:"column:tg_id;type:TEXT;"`
	TrelloID  sql.NullString `gorm:"column:trello_id;type:TEXT;"`
	FirstName sql.NullString `gorm:"column:first_name;type:TEXT;"`
	LastName  sql.NullString `gorm:"column:last_name;type:TEXT;"`
	Avatar    sql.NullString `gorm:"column:avatar;type:UUID;"`
	Roles     pq.StringArray `gorm:"type:string[]"`
}
