import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SocketContextProvider } from './hooks/useSocket.tsx'
import { OnlineContextProvider } from './hooks/useOnline.tsx'
import { MouseContextProvider } from './hooks/useMouse.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MouseContextProvider>
    <OnlineContextProvider>
    <SocketContextProvider>
    <App />
    </SocketContextProvider>
    </OnlineContextProvider>
    </MouseContextProvider>
  </StrictMode>,
)
