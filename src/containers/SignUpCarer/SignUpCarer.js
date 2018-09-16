import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createCarer, setCurrentUser } from '../../actions';
import { withRouter } from 'react-router-dom';
import { createUser } from '../../helpers/fetchCalls';

import './SignUpCarer.css';

export class SignUpCarer extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      contactName: '',
      contactPhone: '',
      isElder: false
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleClick = e => {
    const user = this.state;
    e.preventDefault();
    this.props.setCurrentUser(this.state);
    createUser(user);
  };

  testPhoneNumber = e => {
    e.preventDefault();
  };

  render() {
    return (
      <form className="signup-form">
        <input
          onChange={this.handleChange}
          className="signup-first-name signup-input"
          value={this.state.firstName}
          name="firstName"
          placeholder="First Name"
        />
        <input
          onChange={this.handleChange}
          className="signup-last-name signup-input"
          value={this.state.lastName}
          name="lastName"
          placeholder="Last Name"
        />

        <input
          onChange={this.handleChange}
          className="signup-email-address signup-input"
          value={this.state.email}
          name="email"
          placeholder="Email Address"
        />
        <section className="signup-phone-section">
          <input
            onChange={this.handleChange}
            className="signup-phoneNumber signup-input"
            value={this.state.phoneNumber}
            name="phoneNumber"
            placeholder="Phone Number"
          />
          <button onClick={this.testPhoneNumber} className="phone-test-btn">
            Test
          </button>
        </section>
        <input
          onChange={this.handleChange}
          className="signup-elder-name signup-input"
          value={this.state.contactName}
          name="contactName"
          placeholder="Elder Contact Name"
        />
        <input
          onChange={this.handleChange}
          className="signup-elder-phone signup-input"
          value={this.state.contactPhone}
          name="contactPhone"
          placeholder="Elder Contact Phone"
        />
        <button className="signup-submit-btn" onClick={this.handleClick}>
          Submit
        </button>
      </form>
    );
  }
}

SignUpCarer.propTypes = {
  currentUser: PropTypes.object,
  setCurrentUser: PropTypes.func.isRequired,
  createCarer: PropTypes.func.isRequired
};

export const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export const mapDispatchToProps = dispatch => ({
  createCarer: user => dispatch(createCarer(user)),
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignUpCarer)
);
