import React from 'react'
import Card from './component/Card'
import { useState } from 'react'
import { createContext } from 'react'
import ChildQ from './component/ChildQ'
import './App.css'

const ThemeContext = createContext()

const App = () => {
  // const [name, setName] = useState('');
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div id='container' style={{backgroundColor: theme==='light'? "beige": "black"}}>
        <ChildQ />
      </div>
    </ThemeContext.Provider>

    // <div>
    //   <Card name={name} setName={setName}/>
    //   <p>Name: {name}</p>
    // </div>
  );
}

export default App
export {ThemeContext}