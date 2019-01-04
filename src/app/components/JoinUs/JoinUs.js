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
    if (!email.length) {
      return false;
    }
    if (!/^[a-zA-Z0-9]+(([a-zA-Z0-9]\.)*)+([a-zA-Z0-9]*)+@[a-zA-Z0-9]+(\.+[A-Za-z]+)+$/.test(email)) {
      return true;
    }
    return false;
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
    const isDisabled = this.validate(email);
    return !isDisabled;
  };

  render() {
    const { email } = this.state;
    const isDisabled = this.validate(email);
    const error = '* Please enter valid e-mail: sample@samle.com!';
    return (
      <div className="joinus col-9">
        <div className="joinus-info col-6">
          <h2>NEWS LETTER</h2>
          <p>join us now to get all news and special offers</p>
        </div>
        <form onSubmit={this.handleSubmit} className="col-4">
          <div>
            <div className="mailfield col-4">
              <img src={mailicon} alt="mailicon" />
              <input
                className={isDisabled ? 'error' : ''}
                type="email"
                placeholder="type your email here"
                value={email}
                required
                onChange={this.handleEmailChange}
              />
            </div>
            <button disabled={isDisabled} type="submit">
              join us
            </button>
          </div>
          <p className={isDisabled ? 'showerror' : ''}>{error}</p>
        </form>
      </div>
    );
  }
}
export default JoinUs;
