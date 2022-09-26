package migrations

import (
	"path/filepath"
	"strings"
)

func GetPath(absPath, svc string, bscPath []string) string {
	path := removeTail(absPath, bscPath)

	path = filepath.Join(append([]string{path}, bscPath...)...)
	path = filepath.Join(path, svc, "migrations")

	return path
}

func removeTail(absPath string, bscPath []string) string {
	for i := len(bscPath); i > 0; i-- {
		bp := filepath.Join(bscPath[0:i]...)
		li := strings.LastIndex(absPath, bp)
		if li == -1 {
			continue
		}
		if li == len(absPath)-len(bp) {
			return absPath[0:li]
		}
	}

	return absPath
}
