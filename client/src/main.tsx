import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { setupBurnerManager } from "@dojoengine/create-burner"
import './index.css'
import App from './App.tsx'
import { dojoConfig } from '../dojoConfig.ts'
import { DojoContextProvider } from './DojoContext.tsx'
import StarknetProvider from './starknet-provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DojoContextProvider
      burnerManager={await setupBurnerManager(dojoConfig)}
    >
      <StarknetProvider>
        <App />
      </StarknetProvider>
    </DojoContextProvider>   
  </StrictMode>,
)
