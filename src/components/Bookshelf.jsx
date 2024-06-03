import React from 'react'

const Bookshelf = ({bookshelf}) => {
  return (
    <div className='bookshelf'>
        {
            bookshelf.map((book, index) => (
                <div key={index} className="bookshelf-book">
                    <h3>{book.title}</h3>
                    <p>{book.auther_name ? book.auther_name.join(', ') : 'Unknown Author'}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Bookshelf