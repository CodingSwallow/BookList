import React, { Component } from 'react';
import BookAdd from './BookAdd'
import BookList from './BookList'

import './book-app.css'

class BookApp extends Component {
  constructor () {
    super();
    this.state = {
      books:[]
    }
  }
  componentWillMount () {
    this._loadBooks();
  }
  handleDataFromBookAdd (newbook) {
    if (!newbook) return;
    if (!newbook.name) return alert('请输入书名！');
    if (!newbook.author) return alert('请输入作者名！');
    let bookshelf = this.state.books;
    bookshelf.push(newbook);
    this.setState({ books: bookshelf });
    this._saveBooks(bookshelf);
  }
  handleDataFromBookList (index) {
    let books = this.state.books;
    books.splice(index, 1);
    this.setState({ books: books });
    this._saveBooks(books);
  }
  handleScoreFromBookList (index, score) {
    const books = this.state.books;
    books[index].score = score;
    this.setState({ books: books });
    this._saveBooks(books);
  }
  _saveBooks (books) {
    localStorage.setItem('Bookshelf', JSON.stringify(books));
  }
  _loadBooks () {
    let books = localStorage.getItem('Bookshelf');
    if (books) {
      books = JSON.parse(books);
      this.setState({ books: books });
    }
  }
  render () {
    return (
      <div className='book-grade-app'>
        <BookList
          onDeleteBookList={ this.handleDataFromBookList.bind(this) }
          onGetScoreFromList={ this.handleScoreFromBookList.bind(this) }
          bookshelf={ this.state.books }/>
        <BookAdd
          onSubmitBookAdd={ this.handleDataFromBookAdd.bind(this) }/>
      </div>
    )
  }
}

export default BookApp