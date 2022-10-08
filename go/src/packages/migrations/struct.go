package migrations

type Collection struct {
	ms []Migration
	p  int
}

// Add migration in an ordered collection (ordered by name ASC)
func (ms *Collection) Add(m Migration) {
	for i, m0 := range ms.ms {
		if m0.Version == m.Version {
			return
		}

		if m0.Version > m.Version {
			tail := make([]Migration, len(ms.ms)-i)
			copy(tail, ms.ms[i:len(ms.ms)])
			ms.ms = append(ms.ms[0:i], m)
			ms.ms = append(ms.ms, tail...)
			return
		}
	}

	ms.ms = append(ms.ms, m)
}
func (ms *Collection) Rewind() {
	ms.p = 0
}
func (ms *Collection) Get() []Migration {
	return ms.ms
}

type Migration struct {
	Version int64
	Dir     string
}
