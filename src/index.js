import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProviderWrapper } from './contexts/auth.context'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(

  <AuthProviderWrapper>
    <React.StrictMode>

      <Router>
        <App />
      </Router>

    </React.StrictMode>


  </AuthProviderWrapper>

)