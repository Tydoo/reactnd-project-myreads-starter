import React, { Component } from 'react'
import BookGrid from './BookGrid'

class Bookshelf extends Component {

  render() {
    const { books, updateBookshelf, bookshelf } = this.props

    let bookshelfTitle
    let bookshelfName

    bookshelfTitle = () => {
      if (this.props.bookshelf === "currentlyReading") {
        return bookshelfName = "Currently Reading"
      }

      else if(this.props.bookshelf === "wantToRead") {
        return bookshelfName = "Want To Read"
      }

      else if(this.props.bookshelf ==="read") {
        return bookshelfName = "Read"
      }

      else {
        bookshelfName="none"
      }
    }

    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{bookshelfTitle()}</h2>
        <div className="bookshelf-books">
              <BookGrid
                bookshelf={bookshelf}
                books={books}
                //the below prop is being passed down from parent to App to BookshelfChanger
                updateBookshelf={updateBookshelf}
              />
        </div>
      </div>
    )
  }
}

export default Bookshelf
