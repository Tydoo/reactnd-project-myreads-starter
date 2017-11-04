import React, {Component} from 'react'
import { Link } from 'react-router-dom'
class NotFound extends Component {

  render() {
    return(
      <div className="error-page">
        <Link className="close-search" to="/"></Link>
        <h1>404</h1>
        <h2>Sorry! The page you are looking for cannot be found :(</h2>
      </div>
    )
  }
}

export default NotFound
