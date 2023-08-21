import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import ChatProvider from './context/ChatProvider'


import App from './App'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ChatProvider>
        <App />
      </ChatProvider>
    </ChakraProvider>
  </React.StrictMode>
)
