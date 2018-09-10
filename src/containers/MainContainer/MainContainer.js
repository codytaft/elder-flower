import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class MainContainer extends Component {
  render() {
    return (
      <section>
        <NavLink exact to="/login">
          Login
        </NavLink>
        <NavLink exact to="/sign-up-home">
          SignUp
        </NavLink>
      </section>
    );
  }
}
