import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import HeaderTop from './HeaderTop';

const Header = props => {
  const { headerFooterVisibility } = props;
  const visible = headerFooterVisibility.value;
  const navLinks = [
    { id: 0, val: 'Home', link: '/' },
    { id: 1, val: 'Products', link: '/products' },
    { id: 2, val: 'Hot Deals', link: '/hot-deals' },
    { id: 3, val: 'About', link: '/about' },
    { id: 4, val: 'Contact', link: '/contacts' }
  ];

  const navItems = navLinks.map(item => (
    <li key={item.id} className="navbar-link">
      <Link to={item.link}>{item.val}</Link>
    </li>
  ));

  const navToggle = () => {
    const navMain = document.querySelector('.nav-main');
    navMain.classList.toggle('nav-toggle');
  };

  return visible ? (
    <header className="header">
      <div className="container">
        <HeaderTop />
        <div className="header-main">
          <div className="col-2">
            <Link to="/">
              <img src={logo} alt="logo" className="logo" />
            </Link>
          </div>
          <nav className="navbar col-10">
            <div className="nav-main">
              <ul className="header-links">{navItems}</ul>
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
                  <button type="button" className="menu" onClick={navToggle}>
                    <i className="fas fa-bars" />
                  </button>
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
