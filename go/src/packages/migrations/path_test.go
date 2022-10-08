package migrations

import (
	"fmt"
	"testing"

	"github.com/stretchr/testify/assert"
)

var bscPath = []string{"backend", "services"}
var absPaths = []string{
	"/Users/username/www/projectName/backend/services",
	"/Users/username/www/projectName/backend",
	"/Users/username/www/projectName/",
	"/Users/username/www/projectName",
}
var serviceMigrationFolders = map[string]string{
	"user": "/Users/username/www/projectName/backend/services/user/migrations",
}

func TestGetPath(t *testing.T) {
	for _, p := range absPaths {
		for s, expPath := range serviceMigrationFolders {
			assert.Equal(t, expPath, GetPath(p, s, bscPath), fmt.Sprintf("root path: %s", p))
		}
	}
}
