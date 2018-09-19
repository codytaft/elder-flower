import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import { setCurrentUser } from '../../actions';
import { getUser } from '../../helpers/fetchCalls';
import './Login.css';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: false
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    let comparePassword;
    // const salt = bcrypt.genSaltSync(10);
    const { history } = this.props;
    const { email, password } = this.state;
    const user = await getUser(email, password);
    if (user.length) {
      comparePassword = await bcrypt.compareSync(password, user[0].password);
    }
    if (comparePassword) {
      this.props.setCurrentUser(user[0]);
      const location = { pathname: './dashboard' };
      history.push(location);
    } else {
      const location = { pathname: './login' };
      history.push(location);
      this.setState({ email: '', password: '', error: true });
    }
  };

  render() {
    const { email, password } = this.state;
    const isEnabled = email.length > 0 && password.length > 0;
    return (
      <form onSubmit={this.handleSubmit} className="login-form">
        <input
          onChange={this.handleChange}
          type="text"
          className="login-email-input login-input"
          value={email}
          name="email"
          placeholder="Email Address"
        />
        <input
          onChange={this.handleChange}
          type="text"
          className="login-password-input login-input"
          value={password}
          name="password"
          placeholder="Password"
        />
        <button disabled={!isEnabled} className="login-submit-button">
          Submit
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  setCurrentUser: PropTypes.func,
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
