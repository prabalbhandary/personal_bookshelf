import React from 'react'
import Bookshelf from '../components/Bookshelf'

const BookshelfPage = () => {
    const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || []
  return (
    <div>
        <Bookshelf bookshelf={bookshelf} />
    </div>
  )
}

export default BookshelfPage