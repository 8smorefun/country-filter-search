import { Component } from 'react';

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    this.props.onSearchTextChange(e.target.value);
  }

  render() {
    return (
      <input
        className='search-input'
        type='text'
        onChange={this.onChangeHandler}
      />
    );
  }
}
