import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/logo.png';

const Header = props => {
  const { visible } = props;
  return visible ? (
    <header className="header">
      <div className="container">
        <div className="header-top">
          {/* <i className="far fa-envelope">
            <span>info@shopy.com</span>
          </i> */}
          <i className="fas fa-book">
            <span>453 - 5553 - 996</span>
          </i>
          <div className="icons-right">
            <i className="fab fa-facebook-f" />
            <i className="fab fa-twitter" />
            <i className="fab fa-google-plus" />
            <i className="fab fa-instagram" />
          </div>
        </div>
        <div className="header-main">
          <div className="logo col-2">
            <img src={logo} alt="logo" />
          </div>
          <nav className="navbar col-10">
            <ul className="header-links col-5">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/deals">Hot Deals</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <div className="header-nav-right col-2">
              <ul className="header-links">
                <li>
                  <a href="/">
                    <i className="fa fa-search" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa fa-user" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fas fa-shopping-basket" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  ) : null;
};

export default Header;
