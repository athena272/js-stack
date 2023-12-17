import React, { useState, createContext } from "react";

export const ThemeContext = createContext('dark')

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark')
    
    const handleToggleTheme = () => {
        setTheme(currentTheme => currentTheme === 'dark' ? 'light' : 'dark')
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                onToggleTheme: handleToggleTheme
            }}
        >
            {children}
        </ ThemeContext.Provider>
    )
}

export default ThemeProvider