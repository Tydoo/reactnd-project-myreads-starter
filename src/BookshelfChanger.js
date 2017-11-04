import React, { Component} from 'react'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'

class BookshelfChanger extends Component {
  static PropTypes= {
    thisBook: PropTypes.object.isRequired,
    books:PropTypes.array.isRequired,
    updateBookshelf: PropTypes.func.isRequired
  }
  render() {
    const { thisBook, books, updateBookshelf} = this.props

    let changeShelf

    changeShelf = (eventValue) => {
      BooksAPI.update(thisBook.id, eventValue)
        books.map( book => {
          if (book.id === thisBook.id) {
            BooksAPI.update(book, eventValue).then(() =>
              {updateBookshelf(book, eventValue)}
            )
              }
              else {false}
            })
          }

    return(
      <div className="book-shelf-changer">
        <select defaultValue={thisBook.shelf} onChange={(event) => {changeShelf(event.target.value)}}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookshelfChanger
