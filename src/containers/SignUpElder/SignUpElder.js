import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../actions';
import { withRouter } from 'react-router-dom';
import { createUser, testPhoneNumber } from '../../helpers/fetchCalls';
import './SignUpElder.css';

// var bcrypt = require('bcrypt');
// const saltRounds = 10;

export class SignUpElder extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      contactName: '',
      contactPhone: '',
      isElder: true,
      password: ''
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const cleanPhoneNumber = `+1${this.state.phoneNumber.replace(
      /[- ._]/g,
      ''
    )}`;
    // bcrypt.hash(this.state.password, saltRounds, function(err, hash) {});
    await this.setState({ phoneNumber: cleanPhoneNumber });
    const user = this.state;
    this.props.setCurrentUser(this.state);
    createUser(user);
    const location = { pathname: './dashboard' };
    this.props.history.push(location);
  };

  testPhoneNumber = e => {
    e.preventDefault();
    const cleanPhoneNumber = `+1${this.state.phoneNumber.replace(
      /[- ._]/g,
      ''
    )}`;
    testPhoneNumber(cleanPhoneNumber);
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
          className="signup-last-name, signup-input"
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
            style={{ marginLeft: '0px' }}
          />
          <button onClick={this.testPhoneNumber} className="phone-test-btn">
            Test
          </button>
        </section>

        <input
          onChange={this.handleChange}
          className="signup-carer-name signup-input"
          value={this.state.contactName}
          name="contactName"
          placeholder="Carer Contact Name"
        />
        <input
          onChange={this.handleChange}
          className="signup-carer-phone signup-input"
          value={this.state.contactPhone}
          name="contactPhone"
          placeholder="Carer Contact Phone"
        />
        <button className="signup-submit-btn" onClick={this.handleSubmit}>
          Submit
        </button>
      </form>
    );
  }
}

SignUpElder.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
  currentUser: PropTypes.object,
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
  )(SignUpElder)
);
