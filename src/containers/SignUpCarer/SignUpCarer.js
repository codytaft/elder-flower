import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import bcrypt from 'bcryptjs';
import { setCurrentUser } from '../../actions';
import { withRouter } from 'react-router-dom';
import { createUser, testResponsePhoneNumber } from '../../helpers/fetchCalls';

import './SignUpCarer.css';

export class SignUpCarer extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      password: '',
      contactName: '',
      contactPhone: '',
      isElder: false
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const phoneNumber = `+1${this.state.phoneNumber.replace(/[- ._]/g, '')}`;
    const contactPhone = `+1${this.state.contactPhone.replace(/[- ._]/g, '')}`;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(this.state.password, salt);
    await this.setState({ phoneNumber, contactPhone, password: hash });
    this.props.setCurrentUser(this.state);
    createUser(this.state);
    const location = { pathname: './dashboard' };
    this.props.history.push(location);
  };

  testPhoneNumber = e => {
    e.preventDefault();
    const cleanPhoneNumber = `+1${this.state.phoneNumber.replace(
      /[- ._]/g,
      ''
    )}`;
    testResponsePhoneNumber(cleanPhoneNumber, this.state.firstName);
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      contactName,
      contactPhone
    } = this.state;
    const isEnabled =
      firstName.length > 0 &&
      lastName.length > 0 &&
      phoneNumber.length > 0 &&
      email.length &&
      password.length > 0 &&
      contactName.length > 0 &&
      contactPhone.length > 0;
    return (
      <form className="signup-form">
        <input
          onChange={this.handleChange}
          className="signup-first-name signup-input"
          value={firstName}
          name="firstName"
          placeholder="First Name"
        />
        <input
          onChange={this.handleChange}
          className="signup-last-name signup-input"
          value={lastName}
          name="lastName"
          placeholder="Last Name"
        />

        <input
          onChange={this.handleChange}
          className="signup-email-address signup-input"
          value={email}
          name="email"
          placeholder="Email Address"
        />
        <input
          onChange={this.handleChange}
          className="signup-password signup-input"
          value={password}
          name="password"
          placeholder="Password"
        />
        <section className="signup-phone-section">
          <input
            onChange={this.handleChange}
            className="signup-phoneNumber signup-input"
            value={phoneNumber}
            name="phoneNumber"
            placeholder="Phone Number"
            style={{ marginLeft: '0px' }}
          />
          <button
            onClick={this.testPhoneNumber}
            className="phone-test-btn"
            isDisabled={!(phoneNumber.length > 0)}
          >
            Test
          </button>
        </section>
        <input
          onChange={this.handleChange}
          className="signup-elder-name signup-input"
          value={contactName}
          name="contactName"
          placeholder="Elder Contact Name"
        />
        <input
          onChange={this.handleChange}
          className="signup-elder-phone signup-input"
          value={contactPhone}
          name="contactPhone"
          placeholder="Elder Contact Phone"
        />
        <button
          className="signup-submit-btn"
          onClick={this.handleSubmit}
          disabled={!isEnabled}
        >
          Submit
        </button>
      </form>
    );
  }
}

SignUpCarer.propTypes = {
  currentUser: PropTypes.object,
  setCurrentUser: PropTypes.func,
  history: PropTypes.object
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
  )(SignUpCarer)
);
