import React, { Component } from 'react';
import Rate from './Rate'
class Book extends Component {
  constructor () {
    super();
    this.state = {
      rate_item_status:[0,0,0,0,0],
    }
  }
  handleDeleteBook () {
    if (this.props.onDeleteBook) {
      this.props.onDeleteBook(this.props.index);
    }
  }
  handleScoreFromRate (score) {
    this._loadRatingPic(score);
    if (this.props.onGetScoreFromBook) {
      this.props.onGetScoreFromBook(this.props.index,score);
    }
  }
  componentWillMount () {
    this._loadRatingPic(this.props.score);
  }
  _loadRatingPic (score) {
    //console.log('name:'+this.props.name+'score:'+score);
    let temp_status = this.state.rate_item_status;
    temp_status.fill(0);
    this.setState({ rate_item_status: temp_status});
    //console.log(this.state.rate_item_status);

    temp_status = this.state.rate_item_status;
    for (let i=0; i<score; i++) {
      temp_status[i] = 1;
    }
    this.setState({ rate_item_status:temp_status });
    //console.log(this.state.rate_item_status)
    //this.setState({ score:score });
  }
  render () {
    const arr = [1,2,3,4,5];
    var scoreString = '';
    if (this.props.score) {
      scoreString = `${this.props.score}分`;
    }
    return (
      <div className='book'>
        <div className='book-basic-info'>
          <p className='book-name'><span>{this.props.name}</span></p>
          <p className='book-author'><span>{this.props.author}<sub>(作者)</sub></span></p>
          <p className='book-score'><span>{scoreString}</span></p>
        </div>
        <div className='book-action'>
          <p className='book-grade'>
            {arr.map(
              (rate, i) =>
              <Rate
                key={i}
                index={i}
                status={this.state.rate_item_status[i]}
                onGetScore={this.handleScoreFromRate.bind(this)}/>
            )}
          </p>
          <p className='book-delete'>
            <span onClick={this.handleDeleteBook.bind(this)}></span>
          </p>
        </div>
      </div>
    )
  }
}

export default Book