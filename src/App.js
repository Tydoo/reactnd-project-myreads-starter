import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Search from './Search'
import BookGrid from './BookGrid'
import './App.css'


class BooksApp extends React.Component {

  constructor() {
    super();

    this.state = {
      books: [],
      shelf: []
    }
    this.updateBookshelf= this.updateBookshelf.bind(this)
  }

  updateBookshelf = () => {
    BooksAPI.getAll().then((books) => {this.setState({books : books})})
  }

  componentDidMount() {
  BooksAPI.getAll().then((books) => {
    this.setState({books : books})
  })
}

  render() {

      console.log(this.state.books)
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <Search />
        )} />


          <Route exact path="/" render={() => (

          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                        <BookGrid
                          books={this.state.books}
                          bookshelf="currentlyReading"
                          updateBookshelf={this.updateBookshelf}
                        />
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                  <BookGrid
                    books={this.state.books}
                    bookshelf="wantToRead"
                    updateBookshelf={this.updateBookshelf}
                  />
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                  <BookGrid
                    books={this.state.books}
                    bookshelf="read"
                    updateBookshelf={this.updateBookshelf}
                  />
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )} />

      </div>
    )
  }
}

export default BooksApp
