import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { setCurrentUser } from '../../actions';
import { connect } from 'react-redux';
import './Header.css';

export class Header extends Component {
  logoutUser = () => {
    const { setCurrentUser, history } = this.props;
    setCurrentUser(null);
    history.replace('/');
  };
  render() {
    const { currentUser } = this.props;
    return (
      <section className="main-header-section">
        {currentUser ? (
          <h1 className="main-header-title">Hello {currentUser.firstName}</h1>
        ) : (
          <h1 className="main-header-title">Welcome to Elder Flower </h1>
        )}
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
  history: PropTypes.object,
  setCurrentUser: PropTypes.func,
  currentUser: PropTypes.object,
  location: PropTypes.object
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
