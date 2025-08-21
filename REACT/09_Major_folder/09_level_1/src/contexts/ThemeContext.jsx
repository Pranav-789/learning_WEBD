import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext({
    currentTheme: "light",
    toggleTheme: () => {},
})

export const ThemeProvider = ({children}) => {
    const [currentTheme, setCurrentTheme] = useState('light');

    const toggleTheme = () =>{
        setCurrentTheme((prev) => (prev === "light" ? "dark" : "light"));
    }

    return (
        <ThemeContext.Provider value={{currentTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const  useTheme = ()=>{
    return useContext(ThemeContext)
}