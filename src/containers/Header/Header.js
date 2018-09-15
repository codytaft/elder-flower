import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { setCurrentUser } from '../../actions';
import { connect } from 'react-redux';
import './Header.css';

export class Header extends Component {
  logoutUser = () => {
    this.props.setCurrentUser(null);
    this.props.history.replace('/');
  };
  render() {
    // console.log(this.props.currentUser);
    return (
      <section className="main-header-section">
        <h1 className="main-header-title">Welcome to Elder Flower</h1>
        <Link
          exact
          to="/"
          className={
            !this.props.currentUser
              ? 'nav-link-logout-hidden'
              : 'nav-link-logout'
          }
          onClick={this.logoutUser}
        >
          Logout
        </Link>
      </section>
    );
  }
}

Header.propTypes = {
  history: PropTypes.object.isRequired,
  setCurrentUser: PropTypes.func.isRequired,
  currentUser: PropTypes.object
};

export const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);
