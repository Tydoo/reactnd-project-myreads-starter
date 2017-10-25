import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends Component {
constructor(props) {
super(props);
this.state= {
  query: '',
  results: []
}
}

  _updateQuery = (query) => {
    this.setState({ query: query.trim()})
    this._searchBooks(query)
      }

  _searchBooks = (query) => {
    if (query !== '') {
      BooksAPI.search(this.state.query, 20).then(
        (results) => { this.setState( {results}) })
      }
      return
}

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this._updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid" >
            <Book results= {this.state.results}/>
            </ol>
        </div>
      </div>
    )
  }
}

export default Search
