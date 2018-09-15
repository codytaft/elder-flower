import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './MainContainer.css';
export class MainContainer extends Component {
  constructor() {
    super(),
      (this.state = {
        isClicked: false
      });
  }
  render() {
    return (
      <section className="nav-link-section">
        <NavLink exact to="/login" className="nav-link nav-link-login" onClick>
          LOGIN
        </NavLink>
        <NavLink exact to="/sign-up-home" className="nav-link nav-link-signup">
          SIGNUP
        </NavLink>
      </section>
    );
  }
}
