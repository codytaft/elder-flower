import React, { Component } from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import Routes from '../../components/Routes/Routes';
import Header from '../Header/Header';
import MainContainer from '../MainContainer/MainContainer';

import './App.css';

class App extends Component {
  render() {
    const { location } = this.props;
    return (
      <Router>
        <div
          className={
            location.pathname === '/sign-up-elder' || '/sign-up-carer'
              ? 'app-hidden app'
              : 'app'
          }
        >
          <header className="app-header">
            <Header />
          </header>
          <main className="main-container">
            <MainContainer />
            <Routes />
          </main>
        </div>
      </Router>
    );
  }
}
export default withRouter(App);
