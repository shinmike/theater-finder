import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light navbar-fixed-top navbarTop" id="my-navbar">
          <div className="logo"><h2>Scortch</h2></div>
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle navSidebar" data-toggle="collapse" data-target="#navbarSidebar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <button type="button" className="navbar-toggle user-border" data-toggle="collapse" data-target="#navbar-collapse">
                <span className="user-icon">
                  <i className="fa fa-user" aria-hidden="true"></i>
                </span>
              </button>
              <a href="" className="navbar-brand navTitle">Homadsvadve</a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
