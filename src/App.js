import React, { Component } from 'react';

// Includes
import './assets/css/styles.min.css';

// Components
import Nav from './components/nav';
import SearchBar from './components/search_bar';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <SearchBar />
      </div>
    );
  }
}

export default App;
