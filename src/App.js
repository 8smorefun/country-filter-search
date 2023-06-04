import { Component } from 'react';
import CountryList from './CountryList';
import SearchInput from './SearchInput';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    }
    this.onSearchTextChangeHandler = this.onSearchTextChangeHandler.bind(this);
  }

  onSearchTextChangeHandler(searchText) {
    this.setState(state => ({...state, searchText}))
  }

  render() {
    return (
      <div className='app'>
        <SearchInput onSearchTextChange={ this.onSearchTextChangeHandler } />
        <CountryList searchText={ this.state.searchText} />
      </div>
    );  
  }
}
