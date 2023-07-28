import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AllContextProvider } from './store/context.tsx'
import { Toaster } from "@/components/ui/toaster"
import {ReactQueryDevtools} from "react-query/devtools"
import { QueryClientProvider, QueryClient} from 'react-query'

const client = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <AllContextProvider>
    <QueryClientProvider client={client}>
        <App />
        <Toaster/>
    </QueryClientProvider>

</AllContextProvider>
)
