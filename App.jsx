import { useState } from "react"
import Header from "./components/Header"
import { Outlet } from "react-router-dom"


function App() {
    const [isDarkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('dark-mode')))

    return (
        <>
            <Header theme={[isDarkMode, setDarkMode]} />
            <Outlet context={[isDarkMode]} />
        </>
    )
}

export default App

