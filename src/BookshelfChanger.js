import React, { Component} from 'react'
import * as BooksAPI from './BooksAPI'
class BookshelfChanger extends Component {
constructor() {
  super();
}


  render() {


    let changeShelf
    changeShelf = (eventValue) => {
      console.log(eventValue)
      BooksAPI.update(this.props.thisBook.id, eventValue)
        this.props.books.map( book => {
          if (book.id === this.props.thisBook.id) {
            BooksAPI.update(book, eventValue).then(() =>
              {this.props.updateBookshelf()}
            )
              }
              else {console.log ("no match")}
            })
          }

    return(
      <div className="book-shelf-changer">
        <select defaultValue={this.props.thisBook.shelf} onChange={(event) => {changeShelf(event.target.value)}}>
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
