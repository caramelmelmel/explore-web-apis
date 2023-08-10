import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './pages/main'

import './index.css'
import APIDetails from './pages/APIDetails'
import { RouterProvider } from 'react-router-dom'
import router from './pages'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
