import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Nav from './Nav.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav/>
    <App />
  </React.StrictMode>,
)
