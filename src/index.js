import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProviderWrapper } from './contexts/auth.context'
import App from './App'


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