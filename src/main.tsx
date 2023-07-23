import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AllContextProvider } from './store/context.tsx'
import { Toaster } from "@/components/ui/toaster"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AllContextProvider>
    <App />
    <Toaster/>
</AllContextProvider>
)
