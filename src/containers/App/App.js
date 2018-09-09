import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../../components/Routes/Routes';
import { Route, NavLink } from 'react-router-dom';

import './App.css';

class App extends Component {
  async componentDidMount() {
    const res = await fetch(`http://localhost:3000/api/sendMessage`, {
      method: 'POST',
      body: JSON.stringify({
        To: '+19038511575',
        From: '+17203304593',
        Body: 'hello'
      })
    });
    const result = await res.json();
  }
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
