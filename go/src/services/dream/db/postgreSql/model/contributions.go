package model

import "database/sql"

type Contributions struct {
	ID         string         `gorm:"primary_key;column:id;type:UUID;"`
	ResourceID sql.NullString `gorm:"column:resource_id;type:UUID;"`
	UserID     sql.NullString `gorm:"column:user_id;type:UUID;"`
	List       sql.NullString `gorm:"column:list;type:TEXT;"`
}
