import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Hero from './components/Hero.jsx'
import Calendar from './components/Calendar.jsx'
import Landing from './Landing.jsx'
import NotFound from './NotFound.jsx'
import Article from './Article.jsx'
import PostArticle from './PostArticle.jsx'
import Project from './Project.jsx'
import Manage from './Manage.jsx'

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
    path: '/article',
    element: <Article />
  },
  {
    path : '/experiences',
    element: <Hero /> 
  },
  {
    path: '/projects',
    element: <Project />
  },
  {
    path : '/post/article',
    element : <PostArticle />
  },
  {
    path: '/manage/',
    element: <Manage />
  },
  {
    path: 'calendar',
    element: <Calendar />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={ router } />
  </StrictMode>
)
