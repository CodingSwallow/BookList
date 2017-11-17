import React, {Component} from 'react'

class Rate extends Component {
  constructor () {
    super();
  }
  handleClickRating () {
    //console.log(this.props.index);
    // give score(index+1) to book
    if (this.props.onGetScore) {
      this.props.onGetScore(this.props.index + 1);
    }
  }
  render () {
    const on  = 'light-on';
    const off = 'light-off';
    return (
      <span
        className={this.props.status ? on : off}
        onClick={this.handleClickRating.bind(this)}>
      </span>
    )
  }
}

export default Rate