import React, {Component} from 'react'


class Book extends React.Component {
constructor(props) {
  super(props);
}
  render () {
    if (this.props.books === undefined || this.props.books === '') {
      Book = null;
    }

    console.log(this.props.books)
    return (
      <li>
        {(this.props.books.map((book,i) => (
          <div className="book">
            {console.log(this.props.books[i])}
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.book[i].imageLinks.thumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.books.title}</div>
          <div className="book-authors">{this.props.books.authors}</div>
        </div>
      )
    )
    )}
  </li>
  )
}
}

export default Book
