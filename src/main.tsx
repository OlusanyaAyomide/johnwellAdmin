import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AllContextProvider } from './store/context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AllContextProvider>
    <App />
</AllContextProvider>
)
