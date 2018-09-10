import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import MainContainer from '../MainContainer/MainContainer';

export class Home extends Component {
  logout = () => {};
  render() {
    return (
      <section>
        <header>
          <p>Date</p>
          <h1>Hi There</h1>
          <Link
            exact
            to="/"
            className="nav-link nav-link-logout"
            onClick={this.logout}
          >
            Logout
          </Link>
        </header>
        <Navigation />
        <MainContainer />
      </section>
    );
  }
}
