import React, { Component } from 'react'
import BookshelfChanger from './BookshelfChanger'


class Book extends Component {

  render() {
    const { books, updateBookshelf, thisBook } = this.props
    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thisBook.imageLinks.smallThumbnail})`}}></div>
          <BookshelfChanger
            books={books}
            thisBook={thisBook}
            //the below prop is being passed down from parent to App to BookshelfChanger
            updateBookshelf={updateBookshelf}
          />
        </div>
        <div className="book-title">{thisBook.title}</div>
        <div className="book-authors">{thisBook.authors ? thisBook.authors.join(', ') : ''}</div>
      </div>
    )
  }
}

export default Book
