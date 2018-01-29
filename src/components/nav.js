import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-default navbar-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="">Project name</a>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li className="active"><a href="">Home</a></li>
                <li><a href="about">About</a></li>
                <li><a href="contact">Contact</a></li>
                <li className="dropdown">
                  <a href="" className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret"></b></a>
                  <ul className="dropdown-menu">
                    <li><a href="">Action</a></li>
                    <li><a href="">Another action</a></li>
                    <li><a href="">Something else here</a></li>
                    <li className="divider"></li>
                    <li className="dropdown-header">Nav header</li>
                    <li><a href="">Separated link</a></li>
                    <li><a href="">One more separated link</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-6">Find a theatre near by your place</div>
            <div className="col-xs-6">My name is Chris</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;