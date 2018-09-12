import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './MainContainer.css';
export class MainContainer extends Component {
  render() {
    return (
      <section className="nav-link-section">
        <NavLink exact to="/login" className="nav-link nav-link-login">
          Login
        </NavLink>
        <NavLink exact to="/sign-up-home" className="nav-link nav-link-signup">
          SignUp
        </NavLink>
      </section>
    );
  }
}
