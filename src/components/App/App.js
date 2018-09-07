import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Welcome to Elder Flower</h1>
        </header>
      </div>
    );
  }
}

export default App;
