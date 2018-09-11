import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { setCurrentUser } from '../../actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

export class Header extends Component {
  logoutUser = () => {
    this.props.setCurrentUser(null);
    this.props.history.replace('/');
  };
  render() {
    return (
      <section className="main-header">
        <h1>Welcome to Elder Flower</h1>
        <Link
          exact
          to="/"
          className="nav-link nav-link-logout"
          onClick={this.logoutUser}
        >
          Logout
        </Link>
      </section>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Header)
);
