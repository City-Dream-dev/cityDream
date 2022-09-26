package postgreSql

import "github.com/jmoiron/sqlx"

func MustOpenDB(connString string) *sqlx.DB {
	db, err := sqlx.Open("postgres", connString)
	checkErr(err)

	err = db.Ping()
	checkErr(err)

	return db
}
