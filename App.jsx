import Header from "./components/Header"
import { Outlet } from "react-router-dom"
import { ThemeProvider } from "./contexts/ThemeContext"

function App() {
    // console.log(ThemeContext)

    return (
        <ThemeProvider>
            <Header />
            <Outlet />
        </ThemeProvider>
    )
}

export default App

