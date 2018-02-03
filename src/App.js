import React, { Component } from 'react';

// Includes
import './assets/css/styles.min.css';

// Components
import Nav from './components/nav';
import SearchBar from './components/search_bar';
import Map from './components/map'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <SearchBar />
        <div style={{width: '100%', height: '100vh'}}>
          <Map 
            center={{lat:40.728199, lng:-73.9894738}}
            zoom={8}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
