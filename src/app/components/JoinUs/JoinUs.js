import React, { Component } from 'react';
import mailicon from '../../../assets/mailicon.png';

class JoinUs extends Component {
  constructor() {
    super();
    this.state = {
      email: ''
    };
  }

  validate = () => {
    const { email } = this.state;
    const errors = [];
    if (!/^[a-zA-Z0-9]+(([a-zA-Z0-9]\.)*)+([a-zA-Z0-9]*)+@[a-zA-Z0-9]+(\.+[A-Za-z]+)+$/.test(email)) {
      errors.push('Please enter correct e-mail');
    }
    return errors;
  };

  handleEmailChange = evt => {
    this.setState({ email: evt.target.value });
  };

  handleSubmit = evt => {
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }
    this.setState({
      email: ''
    });
    const { email } = this.state;
    // eslint-disable-next-line no-alert
    alert(`Signed up with email: ${email}`);
  };

  canBeSubmitted = () => {
    const { email } = this.state;
    const errors = this.validate(email);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  };

  render() {
    const { email } = this.state;
    const errors = this.validate(email);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return (
      <div className="joinus container">
        <div className="col-6">
          <h2>NEWS LETTER</h2>
          <p>join us now to get all news and special offers</p>
        </div>
        <form onSubmit={this.handleSubmit} className="col-4">
          <div className="col-4">
            <img src={mailicon} alt="mailicon" />
            <input
              className={isDisabled ? 'error' : ''}
              type="email"
              placeholder="type your email here"
              value={email}
              onChange={this.handleEmailChange}
              required
            />
          </div>
          <button disabled={isDisabled} type="submit">
            join us
          </button>
        </form>
      </div>
    );
  }
}
export default JoinUs;
