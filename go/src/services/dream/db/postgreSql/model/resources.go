package model

type Resources struct {
	ID      string `gorm:"primary_key;column:id;type:UUID;"`
	Title   string `gorm:"column:title;type:TEXT;"`
	DreamID string `gorm:"column:dream_id;type:UUID;"`
	Measure string `gorm:"column:measure;type:TEXT;"`
	Amount  int32  `gorm:"column:amount;type:INT4;"`
	StageID string `gorm:"column:stage_id;type:UUID;"`
}
