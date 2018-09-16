import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createElder, setCurrentUser } from '../../actions';
import { withRouter } from 'react-router-dom';

import './SignUpElder.css';
export class SignUpElder extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      emailAddress: '',
      carerName: '',
      carerPhone: ''
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // const {
    //   firstName,
    //   lastName,
    //   phoneNumber,
    //   emailAddress,
    //   emergencyName,
    //   emergencyPhone
    // } = this.state;
    this.props.setCurrentUser(this.state);
  };

  testPhoneNumber = e => {
    e.preventDefault;
    const testPhoneNumber = this.state.phoneNumber;
  };

  render() {
    return (
      <form className="signup-form" onSubmit={this.handleSubmit}>
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
          className="signup-email-address signup-input"
          value={this.state.emailAddress}
          name="emailAddress"
          placeholder="Email Address"
        />
        <input
          onChange={this.handleChange}
          className="signup-carer-name signup-input"
          value={this.state.emergencyName}
          name="carerName"
          placeHolder="Carer Contact Name"
        />
        <input
          onChange={this.handleChange}
          className="signup-carer-phone signup-input"
          value={this.state.carerPhone}
          name="carerPhone"
          placeHolder="Carer Contact Phone"
        />
        <button className="signup-submit-btn">Submit</button>
      </form>
    );
  }
}

SignUpElder.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
  createElder: PropTypes.func.isRequired,
  currentUser: PropTypes.object
};

export const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export const mapDispatchToProps = dispatch => ({
  createElder: user => dispatch(createElder(user)),
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignUpElder)
);
