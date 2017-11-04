import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './bookshelf'

class MainPage extends Component {
  render() {
    const { books, updateBookshelf }= this.props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
          <Bookshelf
            books={books}
            bookshelf="currentlyReading"
            updateBookshelf={updateBookshelf}
           />
           <Bookshelf
             books={books}
             bookshelf="wantToRead"
             updateBookshelf={updateBookshelf}
            />

            <Bookshelf
              books={books}
              bookshelf="read"
              updateBookshelf={updateBookshelf}
             />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default MainPage
