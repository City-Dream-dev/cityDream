package postgreSql

import (
	"fmt"
	"github.com/jmoiron/sqlx"
	"github.com/kpango/glg"
)

func CreateDb(postgresDb *sqlx.DB, dbname, service string) {
	glg.Infof("[%s] create database: %s\n", service, dbname)
	q := fmt.Sprintf("CREATE DATABASE \"%s\"", dbname)
	_, err := postgresDb.Exec(q)
	checkErr(err)

	glg.Infof("[%s] grant connection to db: %s\n", service, dbname)
	q = fmt.Sprintf(`GRANT CONNECT ON DATABASE "%s" TO public;`, dbname)
	_, err = postgresDb.Exec(q)
	checkErr(err)
}

func dbExists(postgresDb *sqlx.DB, dbname string) bool {
	row := postgresDb.QueryRow(fmt.Sprintf(
		"SELECT EXISTS(SELECT datname FROM pg_catalog.pg_database WHERE datname = '%s');",
		dbname,
	))

	var dbExists bool

	if err := row.Scan(&dbExists); err != nil {
		panic(err)
	}
	return dbExists
}

func RemoveDb(postgresDb *sqlx.DB, dbname, service string) {
	if !dbExists(postgresDb, dbname) {
		return
	}
	glg.Infof("[%s] revoke connect to db: %s\n", service, dbname)
	q := fmt.Sprintf(`REVOKE CONNECT ON DATABASE "%s" FROM public;`, dbname)
	_, err := postgresDb.Exec(q)
	checkErr(err)

	glg.Infof("[%s] remove existing connections from db: %s\n", service, dbname)
	q = fmt.Sprintf(`SELECT pid, pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = '%s' AND pid <> pg_backend_pid();`, dbname)
	_, err = postgresDb.Exec(q)
	checkErr(err)

	glg.Infof("[%s] delete database: %s\n", service, dbname)
	q = fmt.Sprintf(`DROP DATABASE IF EXISTS "%s"`, dbname)
	_, err = postgresDb.Exec(q)
	checkErr(err)
}
