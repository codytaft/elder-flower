import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export class SignUpHome extends Component {
  render() {
    return (
      <section className="signup-elder">
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
