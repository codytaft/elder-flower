import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sendSOS } from '../../helpers/fetchCalls';
import './Contacts.css';

export class Contacts extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <div>
        {currentUser ? (
          <div>
            <h1>Your Carer Name: {currentUser.contactName}</h1>
            <h1>Your Carer Phone Number: {currentUser.contactPhone}</h1>
            <button
              onClick={sendSOS(
                currentUser.contactPhone,
                currentUser.contactName
              )}
              className="sos-btn"
            >
              Send SOS Message
            </button>
          </div>
        ) : (
          <div>
            <h1>Please Login</h1>
            <NavLink exact to="/login" className="side-nav-link nav-link">
              Login
            </NavLink>
          </div>
        )}
      </div>
    );
  }
}

Contacts.propTypes = {
  location: PropTypes.object,
  currentUser: PropTypes.object
};

export const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(Contacts)
);
