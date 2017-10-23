import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Search from './Search'
import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead'
import Read from './Read'

class BooksApp extends React.Component {
  state = {
    query: ''
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
            <CurrentlyReading />
            <WantToRead />
            <Read />
            </div>
      </div>
        )}
        />
        <Route path="/Search" render={() => (
          <Search />
        )} />
      </div>
    )
  }
}

export default BooksApp
