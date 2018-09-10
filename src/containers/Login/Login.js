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

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          type="text"
          className="login-email-input"
          value={this.state.email}
          name="email"
          placeholder="Email Address"
        />
        <input
          onChange={this.handleChange}
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
