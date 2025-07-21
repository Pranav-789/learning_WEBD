import React from 'react'
import './App.css'
import { useState, useMemo } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);
  function expensiveTask(num){
    console.log("Inside Expensive task")
    for (let index = 0; index<= 1000000000; index++) {
    }
    return num*2;
  }
  let doubleValue = useMemo(() => expensiveTask(input), [input])
  // only latest value is stored
  return (
    <div>
      <button onClick={()=> setCount(count+1)}>
        Increment
      </button>

      <div>
        Count: {count}
      </div>

    <input type="number" placeholder='Enter number' value={input} onChange={(e)=>setInput(e.target.value)} />

      <div>
        Double: {doubleValue}
      </div>
    </div>
  )
}

export default App
