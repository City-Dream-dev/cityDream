package main

import (
	"flag"
	"fmt"
	"os"

	_ "github.com/lib/pq"
	"github.com/pressly/goose"

	"github.com/City-Dream/backend/packages/db/postgreSql"
	"github.com/City-Dream/backend/packages/migrations"
)

const dbUrl = "postgres://postgres:pass@127.0.0.1:5454/%s?sslmode=disable"

var clearDb = flag.Bool("clearDb", false, "delete database before run migrations")
var bscPath = []string{"services"} // backend/services for Unix, backend\services for Win
var services = []string{"user", "dream"}

func main() {
	flag.Parse()

	if *clearDb == true {
		postgresDb := postgreSql.MustOpenDB(fmt.Sprintf(dbUrl, "postgres"))
		postgreSql.RemoveDb(postgresDb, "city-dream", "city-dream")
		postgreSql.CreateDb(postgresDb, "city-dream", "city-dream")
		//for i := 0; i < len(services); i++ {
		//	service, db := services[i].service, services[i].db
		//	glg.Warnf("Removing '%s' db as parameter -clearDb provided", db)
		//	removeDb(postgresDb, service, db)
		//}
	}

	wd, err := os.Getwd()
	checkErr(err)

	// get migrations files
	var ms migrations.Collection
	for _, srv := range services {
		path := migrations.GetPath(wd, srv, bscPath)
		for _, m := range migrations.GetFromFolder(path) {
			ms.Add(m)
		}
	}

	// migrate
	db := postgreSql.MustOpenDB(fmt.Sprintf(dbUrl, "city-dream"))
	for i := 0; i < len(ms.Get()); i++ {
		m := ms.Get()[i]
		err := goose.UpTo(db.DB, m.Dir, m.Version)
		checkErr(err)
	}
}

func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}
