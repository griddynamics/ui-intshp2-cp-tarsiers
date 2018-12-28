import React from 'react';
import logo from '../../../assets/logo.png';

const Footer = props => {
  const { visible } = props;
  return visible ? (
    <footer className="footer">
      <nav className="footer__block mt-60 container">
        <div className="footer__copyright col-3">
          <img src={logo} alt="" />
          <span>Shopy @copyright 2018</span>
        </div>
        <div className="footer__links col-7">
          <ul>
            <li>
              <a href="/" className="active">
                about us
              </a>
            </li>
            <li>
              <a href="/">contact us</a>
            </li>
            <li>
              <a href="/">support</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/">our feed</a>
            </li>
            <li>
              <a href="/">terms and conditions</a>
            </li>
            <li>
              <a href="/">our privacy</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/">join us</a>
            </li>
            <li>
              <a href="/">live support</a>
            </li>
          </ul>
        </div>
        <div className="footer__payments col-2">
          <p className="active">Payment Methods</p>
        </div>
      </nav>
    </footer>
  ) : null;
};

export default Footer;
