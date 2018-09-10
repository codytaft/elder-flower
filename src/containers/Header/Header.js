import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class Header extends Component {
  logoutUser = () => {};
  render() {
    return (
      <section className="main-header">
        <h1>Welcome to Elder Flower</h1>
        <Link
          exact
          to="/"
          className="nav-link nav-link-logout"
          onClick={this.logoutUser}
        >
          Logout
        </Link>
      </section>
    );
  }
}
