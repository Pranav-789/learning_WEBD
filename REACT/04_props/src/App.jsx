import React from 'react'
import Card from './components/Card'
import Button from './components/Button'
import { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count+1);
    alert(`You have clicked ${count} times.`);
  }
  return (
    <div>
      <Button incCount = {handleClick}/>
      <Card name={"Pranav"}>
        <h1>Hello, Trying to be consistent in react</h1>
        <p>Will compplete the course soon</p>
      </Card>
    </div>
  )
}

export default App
