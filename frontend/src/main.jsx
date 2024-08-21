import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import Navigation from './Navigation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="landing">
      <Navbar />
      <Hero />
      <Navigation />
    </div>
  </StrictMode>,
)
