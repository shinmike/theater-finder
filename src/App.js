import React, { Component } from 'react';

// Includes
import './assets/css/style.min.css';

// Components
  // Header
import Nav from './components/nav';
import Search from './components/search';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Search />
      </div>
    );
  }
}

export default App;
