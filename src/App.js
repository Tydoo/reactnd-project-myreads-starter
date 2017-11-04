import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Switch, Route } from 'react-router-dom'
import MainPage from './main-page'
import Search from './Search'
import './App.css'
import NotFound from './404'


class BooksApp extends React.Component {

  constructor() {
    super();

    this.state = {
      books: []
    }
    // declaring constructor and binding method in order to
    // pass down through child components
    this.updateBookshelf= this.updateBookshelf.bind(this)
  }

  updateBookshelf = (book, shelf) => {
  BooksAPI.update(book, shelf).then(() => {
    book.shelf = shelf
    this.setState(state => ({
      books: state.books.filter(b=> b.id !== book.id).concat([book])
    }))
  })
}

  componentDidMount() {
  BooksAPI.getAll().then((books) => {
    this.setState({books : books})
  })
}

  render() {

    const { books }= this.state

    return (
      <div className="app">
        <Switch>
        <Route path="/search" render={() => (
          <Search
            books={books}
            updateBookshelf={this.updateBookshelf}
          />
        )} />

          <Route exact path="/" render={() => (
            <MainPage
              books={books}
              updateBookshelf={this.updateBookshelf}
             />
        )} />
        <Route path="*" render= {() => (
          <NotFound />
        )}/>

      </Switch>
      </div>
    )
  }
}

export default BooksApp
