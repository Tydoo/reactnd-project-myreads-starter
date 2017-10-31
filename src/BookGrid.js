import React, { Component} from 'react'
import BookshelfChanger from './BookshelfChanger'
import PropTypes from 'prop-types'

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
      {/*map over book html and display book data being passed in from parent's state*/}
      {cleanShelf.map((book) => (
        <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
              <BookshelfChanger
                books={books}
                thisBook={book}
                //the below prop is being passed down from parent to child of child
                updateBookshelf={updateBookshelf}
              />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
          </div>
        </li>
      ))}

    </ol>
    )
  }
}


export default BookGrid
