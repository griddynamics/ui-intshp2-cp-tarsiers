import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import logo from '../../../assets/logo.png';

const Header = props => {
  const { headerFooterVisibility } = props;
  const visible = headerFooterVisibility.value;

  return visible ? (
    <header className="header">
      <div className="container">
        {/* <div className="header-top">
          <i className="far fa-envelope">
            <span>info@shopy.com</span>
          </i>
          <i className="fas fa-book">
            <span>453 - 5553 - 996</span>
          </i>
          <div className="icons-right">
            <i className="fab fa-facebook-f" />
            <i className="fab fa-twitter" />
            <i className="fab fa-google-plus" />
            <i className="fab fa-instagram" />
          </div>
        </div> */}
        <div className="header-main">
          <div className="logo col-2">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <nav className="navbar col-10">
            <div className="nav-main">
              <ul className="header-links">
                <li className="navbar-link">
                  <Link to="/">Home</Link>
                </li>
                <li className="navbar-link">
                  <Link to="/products">Products</Link>
                </li>
                <li className="navbar-link">
                  <Link to="/deals">Hot Deals</Link>
                </li>
                <li className="navbar-link">
                  <Link to="/about">About</Link>
                </li>
                <li className="navbar-link">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="header-nav-right col-3">
              <ul className="header-links">
                <li className="navbar-link">
                  <a href="/">
                    <i className="fa fa-search" />
                  </a>
                </li>
                <li className="navbar-link">
                  <a href="/">
                    <i className="fa fa-user" />
                  </a>
                </li>
                <li className="navbar-link">
                  <a href="/">
                    <i className="fas fa-shopping-basket" />
                  </a>
                </li>
                <li className="navbar-link">
                  <a href="/">
                    <i className="fas fa-bars" />
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

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Header);
