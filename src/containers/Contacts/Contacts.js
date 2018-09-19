import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sendSOS, textQuestion } from '../../helpers/fetchCalls';
import './Contacts.css';

export class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      question: ''
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { currentUser } = this.props;
    textQuestion(
      currentUser.contactPhone,
      currentUser.contactName,
      this.state.question
    );
  };
  render() {
    const { currentUser } = this.props;
    return (
      <div>
        {currentUser ? (
          <div>
            {currentUser.isElder ? (
              <div>
                <h1>Your Carer Name: {currentUser.contactName}</h1>
                <h1>Your Carer Phone Number: {currentUser.contactPhone}</h1>
                <button
                  onClick={() =>
                    sendSOS(currentUser.contactPhone, currentUser.contactName)
                  }
                  className="sos-btn"
                >
                  Send SOS Message
                </button>
              </div>
            ) : (
              <div>
                <h1>Your Elder Name: {currentUser.contactName}</h1>
                <h1>Your Elder Phone Number: {currentUser.contactPhone}</h1>
                <form onSubmit={this.handleSubmit}>
                  <input
                    onChange={this.handleChange}
                    type="text"
                    name="question"
                    value={this.state.question}
                    className="question-input"
                    placeholder="Ask question"
                  />
                  <button className="carer-question-submit">
                    Text Question
                  </button>
                </form>
              </div>
            )}
          </div>
        ) : (
          <div>
            <h1>Please Login</h1>
            <NavLink exact to="/login" className="top-nav-link nav-link">
              Login
            </NavLink>
          </div>
        )}
      </div>
    );
  }
}

Contacts.propTypes = {
  location: PropTypes.object,
  currentUser: PropTypes.object
};

export const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(Contacts)
);
