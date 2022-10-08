package main

import (
	"github.com/City-Dream/backend/api/trello/router"
)

func main() {
	r := router.New()
	r.Run()
}
