import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import MainContainer from '../../components/MainContainer/MainContainer';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../actions';
import Header from '../Header/Header';

import './Dashboard.css';
export class Dashboard extends Component {
  render() {
    return (
      <section className="navigation-bar">
        <Navigation />
        <MainContainer />
      </section>
    );
  }
}

Dashboard.propTypes = {
  setCurrentUser: PropTypes.func,
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
  )(Dashboard)
);
