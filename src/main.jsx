import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'  // Importa el CSS donde tienes @import "tailwindcss";

ReactDOM.createRoot(document.getElementById('root')).render(<App />)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
