import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TelescreenErrorBoundary } from './components/TelescreenErrorBoundary'
import './index.css'

const rootEl = document.getElementById('root')
if (rootEl) {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <TelescreenErrorBoundary>
        <App />
      </TelescreenErrorBoundary>
    </React.StrictMode>,
  )
}
