import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      emailAddress: '',
      emergencyName: '',
      emergencyPhone: ''
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      phoneNumber,
      emailAddress,
      emergencyName,
      emergencyPhone
    } = this.state;
  };

  render() {
    return (
      <section className="signup-page">
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <input
            className="signup-first-name"
            value={this.state.firstName}
            name="firstName"
            placeholder="First Name"
          />
          <input
            className="signup-last-name"
            value={this.state.lastName}
            name="lastName"
            placeholder="Last Name"
          />
          <input
            className="signup-phoneNumber"
            value={this.state.phoneNumber}
            name="phoneNumber"
            placeholder="Phone Number"
          />
          <input
            className="signup-email-address"
            value={this.state.emailAddress}
            name="emailAddress"
            placeHolder="Email Address"
          />
          <input
            className="signup-emergency-name"
            value={this.state.emergencyName}
            name="emergencyName"
            placeHolder="Emergency Contact Name"
          />
          <input
            className="signup-emergency-phone"
            value={this.state.emergencyPhone}
            name="emergencyPhone"
            placeHolder="Emergency Contact Phone"
          />
          <button className="signup-submit-btn">Submit</button>
        </form>
      </section>
    );
  }
}
