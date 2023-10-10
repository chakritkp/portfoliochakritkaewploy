import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import './index.css'
import Home from './Page/Home.jsx';
import Contact from './Component/Contact.jsx';
import Skill from './component/Skill.jsx';
import Project from './component/Project.jsx';

const router = createBrowserRouter([
  {path:'/', element: <Home/>},
  {path:'/contact', element: <Contact/>},
  {path:'/skill', element: <Skill/> },
  {path:'/project', element: <Project/> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
