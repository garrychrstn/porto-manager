import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Navigation from './components/Navigation.jsx'
import Landing from './Landing.jsx'
import NotFound from './NotFound.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Landing />,
    errorElement: <NotFound />
  },
  {
    path : '/hero/',
    element: <Hero />
  },
  {
    path : '/experiences',
    element: <Hero /> 
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={ router } />
  </StrictMode>
)
