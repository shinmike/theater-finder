import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(){
    super()
    this.state = {
      searchLocation: ''
    }
  }

  updateLocation(e){
    this.setState({
      searchLocation: e.target.value
    })
  }

  searchLocation(){
    console.log(`searchLocation: ${this.state.searchLocation}`)
  }

  render() {
    return (
      <div className="search-bar">
        <input onChange={this.updateLocation.bind(this)} type="text" placeholder="" />
        <button onClick={this.searchLocation.bind(this)}>Search</button>
      </div>
    );
  }
}

export default SearchBar;