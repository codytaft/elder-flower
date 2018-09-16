import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../actions';
import { withRouter } from 'react-router-dom';
import './Login.css';

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

  handleSubmit = e => {
    e.preventDefault();
    const { setCurrentUser, history } = this.props;
    const currentUser = this.state;
    setCurrentUser(currentUser);
    const location = { pathname: './dashboard' };
    history.push(location);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="login-form">
        <input
          onChange={this.handleChange}
          type="text"
          className="login-email-input login-input"
          value={this.state.email}
          name="email"
          placeholder="Email Address"
        />
        <input
          onChange={this.handleChange}
          type="text"
          className="login-password-input login-input"
          value={this.state.password}
          name="password"
          placeholder="Password"
        />
        <button className="login-submit-button">Submit</button>
      </form>
    );
  }
}

Login.propTypes = {
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
  )(Login)
);
