import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage/HomePage'
import { InboxPage } from './pages/InboxPage'
import { MessagePage } from './pages/MessagePage'
import { MessagesProvider } from './context/messages-context'

function App() {
  return (
    <MessagesProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/inbox' element={<InboxPage />} />
          <Route path='/message/:id' element={<MessagePage />} />
        </Routes>
      </BrowserRouter>
    </MessagesProvider>
  )
}

export default App
