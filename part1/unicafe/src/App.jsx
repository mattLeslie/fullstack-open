import { useState } from 'react'

const Feedback = (props) => {

  return (
    <>
      <h1>give feedback</h1>
      <button onClick={props.incGood}>good</button>
      <button onClick={props.incNeutral}>neutral</button>
      <button onClick={props.incBad}>bad</button>
    </>
  )
  
}

const Statistics = (props) => {
  return(
    <>
      <h1>statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incGood = () => {
    setGood(good + 1);
  }

  const incNeutral = () =>{
    setNeutral(neutral + 1);
  }

  const incBad = () =>{
    setBad(bad+1);
  }


  return (
    <div>
      <Feedback incGood={incGood} incNeutral={incNeutral} incBad={incBad}></Feedback>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

export default App