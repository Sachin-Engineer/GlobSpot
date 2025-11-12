import { useState } from "react"
import Header from "./components/Header"
import { Outlet } from "react-router-dom"
import ThemeContext from "./contexts/ThemeContext"


function App() {
    const [isDarkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('dark-mode')))
    // console.log(ThemeContext)

    return (
        <ThemeContext.Provider value={[isDarkMode, setDarkMode]}>
            <Header />
            <Outlet />
        </ThemeContext.Provider>
    )
}

export default App

