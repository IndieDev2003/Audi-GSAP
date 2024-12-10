import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import AudiContext from './context/AudiContext'

createRoot(document.getElementById('root')).render(
  <AudiContext >
    <App/>
  </AudiContext>
)
