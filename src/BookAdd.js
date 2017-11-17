import React, { Component } from 'react';

class BookAdd extends Component {
  constructor () {
    super();
    this.state = {
      name:'',
      author:''
    }
  }
  handleInputName (event) {
    this.setState({ name:event.target.value })
  }
  handleInputAuthor (event) {
    this.setState({ author:event.target.value })
  }
  handleSubmitBook () {
    // Give new added book info to bookapp
    if (this.props.onSubmitBookAdd) {
      const book_info = this.state;
      this.props.onSubmitBookAdd(book_info);
    }
    // clear input text
    this.setState({ name: '', author: '' })
  }
  render () {
    return (
      <div className='book-add book-item'>
        <div className='book-add-name book-add-item'>
          <input
            type='text'
            value={ this.state.name }
            id='name'
            placeholder='请输入书名'
            onChange={ this.handleInputName.bind(this) }/>
        </div>
        <div className='book-add-author book-add-item'>
          <input
            type='text'
            value={ this.state.author }
            id='author'
            placeholder='请输入作者名'
            onChange={ this.handleInputAuthor.bind(this) }/>
        </div>
        <div className='book-add-btn book-add-item'>
          <input
            type='button'
            value='添加'
            id='add'
            onClick={ this.handleSubmitBook.bind(this) }/>
        </div>
      </div>
    )
  }
}

export default BookAdd