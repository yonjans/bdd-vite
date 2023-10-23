import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Config } from './Config.tsx'
import { todoRepository } from './shared/contexts.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Config todoRepository={todoRepository}>
      <App />
    </Config>
  </React.StrictMode>,
)
