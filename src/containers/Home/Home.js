import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import MainContainer from '../MainContainer/MainContainer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setCurrentUser } from '../../actions';
import { Header } from '../Header/Header';

export class Home extends Component {
  render() {
    return (
      <section>
        <Header />
        {/* <Navigation /> */}
        <MainContainer />
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
  )(Home)
);
