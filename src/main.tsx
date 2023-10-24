import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import routes from './routes.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    routes
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App router={router} />,
)
