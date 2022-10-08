package main

import (
	"fmt"
	dreamRepo "github.com/City-Dream/backend/services/dream/db/postgreSql/repository"
	"github.com/City-Dream/backend/services/trello/import/mapping"
	"github.com/City-Dream/backend/services/user/db/postgreSql/model"
	userRepo "github.com/City-Dream/backend/services/user/db/postgreSql/repository"
	"github.com/joho/godotenv"

	"github.com/adlio/trello"
	"github.com/caarlos0/env/v6"
	_ "github.com/joho/godotenv/autoload"
)

type Config struct {
	AppKey  string `env:"TRELLO_APP_KEY,required"`
	Token   string `env:"TRELLO_TOKEN,required"`
	BoardId string `env:"TRELLO_BOARD_ID,required"`
}

var dRepo = dreamRepo.Dream{}
var uRepo = userRepo.User{}

func main() {
	err := godotenv.Load()
	if err != nil {
		panic("Error loading .env file: " + err.Error())
	}
	cfg := &Config{}
	if err := env.Parse(cfg); err != nil {
		panic(err)
	}

	client := trello.NewClient(cfg.AppKey, cfg.Token)
	board, err := client.GetBoard(cfg.BoardId, trello.Defaults())
	if err != nil {
		panic(err)
	}
	// GetLists makes an API call to /boards/:id/lists using credentials from `client`
	lists, err := board.GetLists(trello.Defaults())
	if err != nil {
		panic(err)
	}

	for _, list := range lists {
		// GetCards makes an API call to /lists/:id/cards using credentials from `client`
		args := trello.Arguments{"checklists": "all"}
		cards, err := list.GetCards(args)
		if err != nil {
			panic(err)
		}
		fmt.Printf("%#v\n", cards)

		for _, card := range cards {
			members, err := card.GetMembers()
			checkErr(err)
			firstAdmin := getUser(members[0]) // map user by first member from trello card

			att, err := card.GetAttachments(trello.Defaults())
			checkErr(err)
			if len(att) == 0 {
				panic("card has no cover")
			}

			dream := mapping.Dream(list, card, firstAdmin, att[0]) // map dream from trello card
			err = dRepo.CreateDream(&dream)
			checkErr(err)

			clIds := card.Checklists
			for _, clId := range clIds {
				cl, err := client.GetChecklist(clId.ID, trello.Defaults())
				if err != nil {
					panic(err)
				}
				_ = cl
			}
		}
	}
}

func getUser(m *trello.Member) model.User {
	u := uRepo.FindByTrelloId(m.Username)
	if u == nil {
		return mapping.User(m)
	}

	return *u
}

func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}
