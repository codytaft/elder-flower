import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = {
  render() {
    return (
      <section className="nav-link-section">
        <NavLink exact to="/contacts" className="nav-link nav-link-contacts">
          Contacts
        </NavLink>
        <NavLink exact to="/emergency" className="nav-link nav-link-emergency">
          Emergency
        </NavLink>
      </section>
    );
  }
};

export default Navigation;
