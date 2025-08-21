import React from 'react'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='w-full min-h-screen flex'>
      <Nav/>
      <Outlet/>
    </div>
  )
}

export default App
