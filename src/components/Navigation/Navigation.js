import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

export const Navigation = () => {
  return (
    <header className="nav-link-bar">
      <NavLink exact to="/contacts" className="top-nav-link">
        Contacts
      </NavLink>
    </header>
  );
};

export default Navigation;
