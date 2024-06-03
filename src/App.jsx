import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import BookSearchPage from './pages/BookSearchPage'
import BookshelfPage from './pages/BookshelfPage'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<BookSearchPage />} />
        <Route path='/bookshelf' element={<BookshelfPage />} />
      </Routes>
    </Router>
  )
}

export default App