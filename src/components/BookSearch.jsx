import React, { useState } from 'react'
import axios from 'axios'
import BookCard from './BookCard'

const BookSearch = ({addToBookshelf}) => {
    const [query, setQuery] = useState('')
    const [books, setBooks] = useState([])

    const handleSearch = async (e) => {
        const {value} = e.target
        setQuery(value)
        if(value.trim()) {
            try{
                const response = await axios.get(`https://openlibrary.org/search.json?q=10&limit=10&page=1`)
                setBooks(response.data.docs)
            }
            catch(error) {
                console.error('Error fetching data:', error)
            }
        }
        else {
            setBooks([])
        }
    }
  return (
    <div>
        <input type="text" value={query} onChange={handleSearch} placeholder='Search for Books...' />
        <div className="search-results">
            {
                books.map((book) => (
                    <BookCard key={book.key} book={book} addToBookShelf={addToBookshelf} />
                ))
            }
        </div>
    </div>
  )
}

export default BookSearch