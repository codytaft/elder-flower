import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../actions';

import './Dashboard.css';
export class Dashboard extends Component {
  render() {
    const { location } = this.props;
    return (
      <div className="dashboard-wrapper">
        <section className="navigation-bar">
          <Navigation />
        </section>
        {location.pathname === '/dashboard' ? (
          <iframe
            src="https://calendar.google.com/calendar/b/0/embed?showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;mode=WEEK&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=cody.taft%40gmail.com&amp;color=%2309d753&amp;ctz=America%2FDenver"
            width="800"
            height="600"
            frameBorder="0"
            scrolling="no"
            className="dashboard-calendar"
          />
        ) : (
          <div />
        )}
      </div>
    );
  }
}

Dashboard.propTypes = {
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
  )(Dashboard)
);
