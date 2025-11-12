import { createContext, useState } from "react";

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
    const [isDarkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('dark-mode')));

    return (
        <ThemeContext.Provider value={[isDarkMode, setDarkMode]}>
            {children}
        </ThemeContext.Provider>
    )
}