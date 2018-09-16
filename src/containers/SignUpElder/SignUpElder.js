import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createElder, setCurrentUser } from '../../actions';
import { withRouter } from 'react-router-dom';
import { createUser } from '../../helpers/fetchCalls';

import './SignUpElder.css';
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
      isElder: true
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const user = this.state;
    e.preventDefault();
    this.props.setCurrentUser(this.state);
    createUser(user);
  };

  testPhoneNumber = e => {
    e.preventDefault;
    const testPhoneNumber = this.state.phoneNumber;
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
          className="signup-email-address signup-input"
          value={this.state.email}
          name="email"
          placeholder="Email Address"
        />
        <input
          onChange={this.handleChange}
          className="signup-carer-name signup-input"
          value={this.state.contactName}
          name="contactName"
          placeHolder="Carer Contact Name"
        />
        <input
          onChange={this.handleChange}
          className="signup-carer-phone signup-input"
          value={this.state.contactPhone}
          name="contactPhone"
          placeHolder="Carer Contact Phone"
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
