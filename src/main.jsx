
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import Parent from './Parent.jsx']
import App from './App.jsx'

// Create a root instance
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App />
  </StrictMode>,
)