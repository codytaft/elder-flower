import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './SignUpHome.css';
export class SignUpHome extends Component {
  render() {
    return (
      <section className="signup-btns">
        <NavLink
          exact
          to="/sign-up-elder"
          className="nav-link nav-link-signup-elder"
        >
          Elder
        </NavLink>
        <NavLink
          exact
          to="/sign-up-carer"
          className="nav-link nav-link-signup-carer"
        >
          Carer
        </NavLink>
      </section>
    );
  }
}
