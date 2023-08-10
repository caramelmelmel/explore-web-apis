import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './pages/main'

import './index.css'
import APIDetails from './pages/apiDetails'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <APIDetails/>
  </React.StrictMode>,
)
