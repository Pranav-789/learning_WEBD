import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter]= useState(0)

  // let counter = 15;
  const addValue = ()=>{
    // console.log(counter)
    // //but does not update on UI

    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    //only one time counter is updated not four time

    setCounter((prevCounter)=> prevCounter+1) //prevCounter is an argument, counter is passed as prevCounter by react
    setCounter((prevCounter)=> prevCounter+1)
    setCounter((prevCounter)=> prevCounter+1)
    setCounter((prevCounter)=> prevCounter+1)
    //this adds four time as it is dependent on previous value
  }

  const subtractValue = () => {
    setCounter(counter - 1);
    //but does not update on UI
    console.log(counter);
  };

  return (
    <div>
      <h1>React course with chai</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={subtractValue}>Subtract value</button>
      <p>footer: {counter}</p>
    </div>
  );
}

export default App
