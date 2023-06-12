import { useState } from 'react'
import './App.css'

export default function App() {
  const [counter, setCounter] = useState(0)

  function incrementCounter() {
    setCounter((counter) + 1) 
    document.getElementById("counter").style.color = "#00d700"
  }

  function decrementCounter() {
    setCounter((counter) - 1)
    document.getElementById("counter").style.color = "#df1d1b"
  }

  function resetCounter() {
    setCounter(0)
    document.getElementById("counter").style.color = "#252525"
  }

  return (
      <div className="container">
        <h1>Counter</h1>

        <h2 id='counter'>{counter}</h2>

        <div className="buttons">
          <button type='button' onClick={incrementCounter}>Increment</button>
          <button type='button' onClick={resetCounter}>Reset</button>
          <button type='button' onClick={decrementCounter}>Decrement</button>
        </div>{/*End buttons*/}
      </div>//End container
  ) 
}