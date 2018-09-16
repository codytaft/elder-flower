import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createCarer, setCurrentUser } from '../../actions';
import { withRouter } from 'react-router-dom';

import './SignUpCarer.css';

export class SignUpCarer extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      emailAddress: '',
      elderName: '',
      elderPhone: ''
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleClick = e => {
    e.preventDefault();
    this.props.createCarer(this.state);
    this.props.setCurrentUser(this.state);
  };

  // setCurrentUser = () => {
  //   const { firstName, lastName, phoneNumber } = this.state;
  //   const currentUser = {
  //     FirstName: firstName,
  //     LastName: lastName,
  //     PhoneNumber: phoneNumber
  //   };
  //   this.props.setCurrentUser(currentUser);
  // };

  testPhoneNumber = e => {
    e.preventDefault;
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
          value={this.state.emailAddress}
          name="emailAddress"
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
          value={this.state.elderName}
          name="elderName"
          placeholder="Elder Contact Name"
        />
        <input
          onChange={this.handleChange}
          className="signup-elder-phone signup-input"
          value={this.state.elderPhone}
          name="elderPhone"
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
