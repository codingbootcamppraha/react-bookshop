import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppTest from './AppTest.jsx'

import './App.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <AppTest /> */}
  </React.StrictMode>,
)
