import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createCarer, setCurrentUser } from '../../actions';
import { withRouter } from 'react-router-dom';

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
    // this.props.createCarer(this.state);
    const currentUser = {
      FirstName: firstName,
      LastName: lastName,
      PhoneNumber: phoneNumber
    };

    console.log(this.props.setCurrentUser);
    this.props.setCurrentUser(currentUser);
  };

  testPhoneNumber = e => {
    e.preventDefault;
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

          <input
            onChange={this.handleChange}
            className="signup-email-address"
            value={this.state.emailAddress}
            name="emailAddress"
            placeHolder="Email Address"
          />
          <input
            onChange={this.handleChange}
            className="signup-elder-name"
            value={this.state.elderName}
            name="elderName"
            placeHolder="Elder Contact Name"
          />
          <input
            onChange={this.handleChange}
            className="signup-elder-phone"
            value={this.state.elderPhone}
            name="elderPhone"
            placeHolder="Elder Contact Phone"
          />
          <button className="signup-submit-btn">Submit</button>
        </form>
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
      </section>
    );
  }
}

export const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export const mapDispatchToProps = dispatch => ({
  // createCarer: user => dispatch(createCarer(user)),
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignUpCarer)
);
