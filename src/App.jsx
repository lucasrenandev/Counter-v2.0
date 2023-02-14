import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  function incrementCount() {
    setCount(count + 1) 
    document.getElementById("count").style.color = "#00d600"
  }

  function decrementCount() {
    setCount(count - 1)
    document.getElementById("count").style.color = "#df1d1b"
  }

  function resetCount() {
    setCount(0)
    document.getElementById("count").style.color = "#252525"
  }

  return (
      <div className="container">
        <h1>Counter</h1>

        <span id='count'>{count}</span>

        <div className="buttons">
          <button type='button' onClick={incrementCount}>Increment</button>
          <button type='button' onClick={resetCount}>Reset</button>
          <button type='button' onClick={decrementCount}>Decrement</button>
        </div>{/*End buttons */}
      </div>//End container
  ) 
}