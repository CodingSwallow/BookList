import React, { Component } from 'react';
import Book from './Book'

class BookList extends Component {
  constructor () {
    super();
  }
  handleDeleteFromBook (index) {
    if (this.props.onDeleteBookList) {
      this.props.onDeleteBookList(index);
    }
  }
  handleDataFromList (index, score) {
    if (this.props.onGetScoreFromList) {
      this.props.onGetScoreFromList(index, score);
    }
  }
  render () {
    return (
      <div className='book-list book-item'>
        { this.props.bookshelf.map(
            (book, i) =>
            <Book
              key={i}
              index={i}
              name={book.name}
              author={book.author}
              score={book.score}
              onGetScoreFromBook={this.handleDataFromList.bind(this)}
              onDeleteBook={this.handleDeleteFromBook.bind(this)}/>
          ) }
      </div>
    )
  }
}

export default BookList