package mapping

import (
	"database/sql"
	"fmt"
	"github.com/City-Dream/backend/services/user/db/postgreSql/model"
	"strings"

	"github.com/adlio/trello"
	"github.com/google/uuid"
	"github.com/lib/pq"
)

var avatarSize = 170

func User(m *trello.Member) model.User {
	return model.User{
		ID:        uuid.New(),
		FbID:      sql.NullString{},
		TgID:      sql.NullString{},
		TrelloID:  sql.NullString{String: m.Username, Valid: true},
		FirstName: getFirstName(m),
		LastName:  getLastName(m),
		Avatar:    trelloAvatar(m),
		Roles:     pq.StringArray{"admin"},
	}
}

func getFirstName(m *trello.Member) sql.NullString {
	parts := strings.Split(m.FullName, " ")

	return sql.NullString{
		String: parts[0],
		Valid:  true,
	}
}

func getLastName(m *trello.Member) sql.NullString {
	parts := strings.SplitN(m.FullName, " ", 2)
	if len(parts) < 2 {
		return sql.NullString{}
	}

	return sql.NullString{
		String: parts[1],
		Valid:  true,
	}
}

func trelloAvatar(m *trello.Member) sql.NullString {
	if nil == m {
		panic("to get member avatar you must provide a member")
	}

	str := fmt.Sprintf("https://trello-members.s3.amazonaws.com/%s/%s/%d.png", m.ID, m.AvatarHash, avatarSize)

	return sql.NullString{
		String: str,
		Valid:  true,
	}
}
