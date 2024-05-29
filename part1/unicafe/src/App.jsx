import { useState } from 'react'

const Button = (props) =>{
  return(
    <>
    </>
  )
}

const StatisticLine = (props) => {

  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value} {props.percent?<>%</>:<></>}</td>
    </tr>

  )

}

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

  const sum = props.good + props.bad + props.neutral

  const avg = (props.good - props.bad) / sum

  const positive = (props.good / sum) * 100


  return(
    <>
      <h1>statistics</h1>
      {sum == 0 ? <p>No feedback given</p> : <>
        <table>
          <tbody>
          <StatisticLine text="good" value={props.good}/>
          <StatisticLine text="neutral" value={props.neutral}/>
          <StatisticLine text="bad" value={props.bad}/>
          <StatisticLine text="all" value={sum}/>
          <StatisticLine text="average" value={avg}/>
          <StatisticLine text="positive" percent={true} value={positive}/>
          </tbody>
        </table>
      </>
      }

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