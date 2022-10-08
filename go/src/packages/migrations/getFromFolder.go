package migrations

import (
	"fmt"
	"io/fs"
	"log"
	"path/filepath"
	"strconv"
	"strings"
)

// GetFromFolder get .sql migrations from a folder
func GetFromFolder(path string) (ms []Migration) {
	err := filepath.Walk(path, func(fPath string, info fs.FileInfo, err error) error {
		if err != nil {
			panic(err)
		}

		if info.IsDir() {
			return nil
		}

		fmt.Printf("%s - %s\n", fPath, info.Name())
		fileExtension := filepath.Ext(fPath)

		if fileExtension != ".sql" {
			return nil
		}

		// goose migration consist of timestamp, underscore and optional name, e.g. 20220828170227_init.sql
		v, err := strconv.ParseInt(
			strings.Split(info.Name(), "_")[0],
			10, 64,
		)

		if err != nil {
			panic(err)
		}

		ms = append(ms, Migration{
			Version: v,
			Dir:     filepath.Dir(fPath),
		})
		return nil
	})
	if err != nil {
		log.Panic(fmt.Sprintf("error while migrating %s path", path), err)
	}

	return
}
