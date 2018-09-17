import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MainContainer.css';
export class MainContainer extends Component {
  render() {
    const { location } = this.props;
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

export const mapStateToProps = state => ({
  currentUser: state.currentUser
});

MainContainer.propTypes = {
  location: PropTypes.object.isRequired
};

export default withRouter(MainContainer);
