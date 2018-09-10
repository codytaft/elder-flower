import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = {
  render() {
    return (
      <section className="navigation-section">
        <NavLink exact to="/login" className="nav-link nav-link-login">
          Login
        </NavLink>
        <NavLink exact to="/sign-up-home" className="nav-link nav-link-signup">
          Sign Up
        </NavLink>
      </section>
    );
  }
};
