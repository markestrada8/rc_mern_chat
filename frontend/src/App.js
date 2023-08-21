import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from './pages/error-page/error-page'
import HomePage from './pages/HomePage'
import ChatPage from './pages/ChatPage'

import './App.css'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/chat",
      element: <ChatPage />,
    },
  ])


  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
