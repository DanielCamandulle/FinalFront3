// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainLayout from './MainLayout.jsx'
import { ContextProvider } from './components/utils/GlobalContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <ContextProvider>
    <MainLayout />  
  </ContextProvider>
 // </React.StrictMode>,
)
