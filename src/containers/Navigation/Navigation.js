import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

export const Navigation = () => {
  return (
    <header className="nav-link-bar">
      <NavLink exact to="/contacts" className="side-nav-link nav-link-contacts">
        Contacts
      </NavLink>
      <NavLink
        exact
        to="/emergency"
        className="side-nav-link nav-link-emergency"
      >
        Emergency
      </NavLink>
    </header>
  );
};

export default Navigation;
