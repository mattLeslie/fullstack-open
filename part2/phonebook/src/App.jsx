import { useState } from 'react'

const Filter = (props) => {
  return (
    <>
      <div>filter shown with <input onChange={(event) => { props.setNewFilter(event.target.value) }} /></div>
    </>
  )
}

const EntryForm = (props) => {
  return (
    <form>
      <div>
        name: <input onChange={(event) => { props.setNewName(event.target.value) }} />
      </div>
      <div>
        number: <input onChange={(event) => { props.setNewNumber(event.target.value) }} />
      </div>
      <div>
        <button onClick={props.handleSubmit} type="submit">add</button>
      </div>
    </form>
  )
}

const Person = (props) => {
  return (
    <p>{props.person.name} {props.person.number}</p>
  )
}
const People = (props) => {
  return (<>

    {props.filter === '' ?
      <> {props.persons.map((person) => {
        return <Person key={person.name} person={person} />
      })}
      </> :
      <>
        {props.persons.filter((person) => { return person.name.toLowerCase().includes(props.filter.toLowerCase()) }).map((person) => {
          return <Person key={person.name} person={person} />
        })}

      </>
    }

  </>)
}
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [filter, setNewFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (persons.find((person) => { return person.name === newName })) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      const newPersons = persons.concat({ name: newName, number: newNumber })
      setPersons(newPersons)
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setNewFilter={setNewFilter} />
      <h2>Add a new</h2>
      <EntryForm setNewName={setNewName} setNewNumber={setNewNumber} handleSubmit={handleSubmit} />
      <h2>Numbers</h2>
      <People filter={filter} persons={persons}/>
    </div>
  )
}

export default App