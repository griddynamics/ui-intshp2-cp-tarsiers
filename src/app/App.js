import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Tarsiers
          </p>
        </header>
      </div>
    );
  }
}

export default App;
