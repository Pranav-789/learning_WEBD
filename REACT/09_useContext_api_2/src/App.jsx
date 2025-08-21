import React, { useEffect, useState } from 'react'
import useTheme, {ThemeProvider} from './contexts/theme';
import Card from './components/Card';
import ThemeButton from './components/ThemeButton';

const App = () => {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () =>{
    setThemeMode("light");
  }
  const darkTheme = () =>{
    setThemeMode("dark");
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);
  
  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div
        className={`text-lg min-h-screen flex justify-center items-center gap-6 
                  ${
                    themeMode === "dark"
                      ? "bg-gray-900 text-gray-100"
                      : "bg-pink-100 text-gray-900 "
                  }
                  transition-colors duration-300`}
      >
        <Card />
        <ThemeButton />
      </div>
    </ThemeProvider>
  );
}

export default App
