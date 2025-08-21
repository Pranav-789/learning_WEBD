import React, { useState } from 'react'
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import Card from './Card';
import Comp from './Comp';

const App = () => {

  // const [currentTheme, setCurrentTheme] = useState('light');

  // const toggleTheme = ()=>{
  //   setCurrentTheme((prev) => (prev === 'light' ? 'dark' : "light"));
  // }

  const {currentTheme, toggleTheme} = useTheme();

  return (
    <ThemeProvider value={{ currentTheme, toggleTheme }}>
      <Comp/>
    </ThemeProvider>
  );
}

export default App
