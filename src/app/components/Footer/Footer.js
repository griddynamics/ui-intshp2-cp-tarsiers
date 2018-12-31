import React from 'react';
import { Link } from 'react-router-dom';

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
              <Link to="/" className="active">
                about us
              </Link>
            </li>
            <li>
              <Link to="/">contact us</Link>
            </li>
            <li>
              <Link to="/">support</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">our feed</Link>
            </li>
            <li>
              <Link to="/">terms and conditions</Link>
            </li>
            <li>
              <Link to="/">our privacy</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">join us</Link>
            </li>
            <li>
              <Link to="/">live support</Link>
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
