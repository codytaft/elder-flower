import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class Header extends Component {
  logoutUser = () => {};
  render() {
    return (
      <section className="main-header">
        <Link
          exact
          to="/"
          className="nav-link nav-link-logout"
          onCLick={this.logoutUser}
        />
      </section>
    );
  }
}
