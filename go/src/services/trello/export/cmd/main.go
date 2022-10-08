package main

import (
	"encoding/json"
	"fmt"
	dreamRepo "github.com/City-Dream/backend/services/dream/db/postgreSql/repository"
)

func main() {
	var dRepo = dreamRepo.Dream{}
	ds := dRepo.GetAll()

	o, err := json.Marshal(&ds)
	checkErr(err)
	fmt.Println(string(o))
}

func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}
