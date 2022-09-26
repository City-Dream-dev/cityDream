package mapping

import (
	"github.com/City-Dream/backend/services/dream/db/postgreSql/model"
	userModel "github.com/City-Dream/backend/services/user/db/postgreSql/model"
	"github.com/adlio/trello"
	"github.com/google/uuid"
)

func Dream(l *trello.List, c *trello.Card, owner userModel.User) model.Dream {
	return model.Dream{
		ID:          uuid.New(),
		TrelloID:    c.ID,
		Title:       c.Name,
		Description: c.Desc,
		OwnerID:     owner.ID,
		Owner:       owner,
		ManagerID:   owner.ID, // temporarily as we don't have fb users yet
		Status:      l.Name,
	}
}
