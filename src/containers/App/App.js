import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../../components/Routes/Routes';
import { Route, NavLink } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header className="app-header">
            <h1 className="app-title">Welcome to Elder Flower</h1>
          </header>
          <main className="main-container">
            <NavLink exact to="/login" className="nav-link nav-link-login">
              Login
            </NavLink>
            <NavLink exact to="/sign-up" className="nav-link nav-link-signup">
              Sign Up
            </NavLink>
            <Routes />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
