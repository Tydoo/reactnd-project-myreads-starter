import React, { Component} from 'react'
import BookshelfChanger from './BookshelfChanger'

class BookGrid extends Component {

  render() {
    const { books } = this.props
    const { bookshelf } = this.props

     let shelfsBooks = []
     console.log(books)
     shelfsBooks = books.map((book) => {
       if (book.shelf === bookshelf) {
         return book
       }
       else return false //this should be changed to null
   })

   let cleanShelf = []

   cleanShelf = shelfsBooks.filter(book => {
     if (book) {return book}
     else {
       return null
     }
   }
   )

   console.log(cleanShelf)
    return(

    <ol className="books-grid">
      {cleanShelf.map((book) => (
        <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
              <BookshelfChanger
                books={this.props.books}
                thisBook={book}
                updateBookshelf={this.props.updateBookshelf}
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
