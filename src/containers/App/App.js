import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../../components/Routes/Routes';
import Header from '../Header/Header';
import MainContainer from '../MainContainer/MainContainer';

import './App.css';

class App extends Component {
  // async componentDidMount() {
  //   const res = await fetch(`http://localhost:3000/api/sendMessage`, {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       to: '+19038511575',
  //       from: '+17203304593',
  //       body: 'hello'
  //     })
  //   });
  //   // const result = await res.json();
  //   // console.log(result);
  // }
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
