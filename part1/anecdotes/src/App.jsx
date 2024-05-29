import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState({
    val: 0, points : Array(anecdotes.length).fill(0)
  })

  const [max, setMax] = useState({
    idx: 0, val: 0
  })

  const chooseAnecdote = () => {
    let rand = Math.floor(Math.random() * anecdotes.length)
    const newSelection = {
      ...selected,
      val: rand
    }
    setSelected(newSelection)
  }

  const incVote = () => {
    const copy = [...selected.points]
    copy[selected.val] += 1
    const newSelection = {
      ...selected,
      points: copy
    }

    if(copy[selected.val] > max.val){
    
      const newMax = {
        val: copy[selected.val],
        idx: selected.val
      }
      setMax(newMax)
    }
    setSelected(newSelection)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected.val]}</div>
      <div>has {selected.points[selected.val]} votes</div>
      <div>
        <button onClick={incVote}>vote</button>
        <button onClick={chooseAnecdote}>next anecdote</button>
      </div>
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[max.idx]}</div>
      <div>has {selected.points[max.idx]} votes</div>
    </div>
  )
}

export default App