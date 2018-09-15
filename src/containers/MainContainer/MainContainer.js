import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './MainContainer.css';
export class MainContainer extends Component {
  constructor() {
    super(),
      (this.state = {
        isClicked: false
      });
  }
  render() {
    const { location } = this.props.history;
    return (
      <section className="nav-link-section">
        <NavLink
          exact
          to="/login"
          className={
            location.pathname !== '/'
              ? 'nav-link-hidden'
              : 'nav-link nav-link-login'
          }
        >
          LOGIN
        </NavLink>
        <NavLink
          exact
          to="/sign-up-home"
          className={
            location.pathname !== '/'
              ? 'nav-link-hidden'
              : 'nav-link nav-link-signup'
          }
        >
          SIGNUP
        </NavLink>
      </section>
    );
  }
}

export default withRouter(MainContainer);
