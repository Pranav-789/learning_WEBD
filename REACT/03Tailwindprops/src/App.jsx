import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'
import Graph from './components/graph'

function App() {
  const [count, setCount] = useState(0);
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];


  return (
    <div>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with tailwind</h1>
      <Card username='hitesh'/>
      <Card/>
      <Card/>
      <Graph data={data}/>
    </div>
  )
}

export default App
