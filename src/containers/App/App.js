import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../../components/Routes/Routes';
import Header from '../Header/Header';
import MainContainer from '../MainContainer/MainContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="app">
            <header className="app-header">
              <Header />
            </header>
            <main className="main-container">
              <MainContainer />
              <Routes />
            </main>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
