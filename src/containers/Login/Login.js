import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }
  render() {
    return (
      <form>
        <input
          type="text"
          className="login-email-input"
          value={this.state.email}
          name="email"
          placeholder="Email Address"
        />
        <input
          type="text"
          className="login-password-input"
          value={this.state.password}
          name="password"
          placeholder="Password"
        />
        <button className="login-submit-button">Submit</button>
      </form>
    );
  }
}
