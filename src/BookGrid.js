import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './book'

class BookGrid extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    bookshelf: PropTypes.string.isRequired,
    updateBookshelf: PropTypes.func.isRequired
  }

  render() {
    const { books, bookshelf, updateBookshelf } = this.props

     let shelfsBooks = []

     shelfsBooks = books.map((book) => {
       if (book.shelf === bookshelf) {
         return book
       } else return null
   })

   let cleanShelf = []

   cleanShelf = shelfsBooks.filter(book => {
     if (book) {return book}
     else {return null}
   }
   )

    return(

    <ol className="books-grid">
      {/*map over book component and display book data being passed in from parent's state*/}
      {cleanShelf.map((book) => (
        <li key={book.id}>
          <Book
            bookshelf={bookshelf}
            books={books}
            thisBook={book}
            //the below prop is being passed down from App to BookshelfChanger
            updateBookshelf={updateBookshelf}
           />
        </li>
      ))}

    </ol>
    )
  }
}


export default BookGrid
