import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Navigation from './components/Navigation.jsx'
import Landing from './Landing.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Landing />
  },
  {
    path : '/hero/',
    element: <Hero />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={ router } />
  </StrictMode>
)
