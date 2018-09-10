import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createUser, setCurrentUser } from '../../actions/userActions';

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
    this.props.createUser(this.state);
  };

  testPhoneNumber = e => {
    e.preventDefault;
    const testPhoneNumber = this.state.phoneNumber;
  };

  render() {
    return (
      <section className="signup-page">
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            className="signup-first-name"
            value={this.state.firstName}
            name="firstName"
            placeholder="First Name"
          />
          <input
            onChange={this.handleChange}
            className="signup-last-name"
            value={this.state.lastName}
            name="lastName"
            placeholder="Last Name"
          />
          <section className="signup-phone-section">
            <input
              onChange={this.handleChange}
              className="signup-phoneNumber"
              value={this.state.phoneNumber}
              name="phoneNumber"
              placeholder="Phone Number"
            />
            <button onClick={this.testPhoneNumber}>Test Phone</button>
          </section>

          <input
            onChange={this.handleChange}
            className="signup-email-address"
            value={this.state.emailAddress}
            name="emailAddress"
            placeHolder="Email Address"
          />
          <input
            onChange={this.handleChange}
            className="signup-emergency-name"
            value={this.state.emergencyName}
            name="emergencyName"
            placeHolder="Emergency Contact Name"
          />
          <input
            onChange={this.handleChange}
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

export const mapDispatchToProps = dispatch => ({
  createUser: user => dispatch(createUser(user)),
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
