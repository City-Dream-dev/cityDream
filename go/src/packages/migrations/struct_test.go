package migrations

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestCollection(t *testing.T) {
	c := Collection{}
	m0 := Migration{Version: 0}
	m1 := Migration{Version: 1}
	m2 := Migration{Version: 2}

	c.Add(m0)
	c.Add(m2)
	c.Add(m2)
	c.Add(m1)

	assert.Len(t, c.Get(), 3)

	for i, m := range c.Get() {
		assert.Equal(t, int64(i), m.Version)
	}
}
