import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'

class Search extends Component {

  state = {
    query:'',
    books:[]
  }

  static propTypes = {
  books: PropTypes.array.isRequired,
  updateBookshelf: PropTypes.func.isRequired
  }

//this method fetches a list of books from BE and then
// replaces any book objects that are already on a shelf
// in order to reflect the books state

  updateQuery = (query) => {
    this.setState({query: query})
    if (query !== '') {
      BooksAPI.search(query,20).then((books) => {
        if (books.error) {
          this.setState({ books:[] })
        }
        else {
          books.map((book, index, array) => {
            if (book.imageLinks === undefined) {
               book.imageLinks={}
               book.imageLinks.thumbnail='http://via.placeholder.com/128x193?text=No%20Cover'

            }
            this.props.books.map((shelvedBook) => {
              if (shelvedBook.id === book.id) {
                array[index]= shelvedBook
              } else {
                book.shelf='none'
              }
            })
          })

          return this.setState({books})
        }

      })
    } else {
      this.setState({ books: [] })
    }
  }


  render() {
    const { query, books } = this.state

    return(
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
              value={query}
              onChange={(event) => {this.updateQuery(event.target.value)}}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books !== '[]' && (books.map((book) => (

                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks.thumbnail})`
                        }}></div>
                      <div className="book-shelf-changer">
                        <select defaultValue={book.shelf} onChange={(event) => {this.props.updateBookshelf(book, event.target.value)}}>
                          <option value="none" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div>
                  </div>
                </li>

              )
            ))}
          </ol>
        </div>
      </div>
    )
  }

}

export default Search
