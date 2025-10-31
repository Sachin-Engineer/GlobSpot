import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Country from './pages/Country.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/:Country',
                element: <Country />,
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={router} />)