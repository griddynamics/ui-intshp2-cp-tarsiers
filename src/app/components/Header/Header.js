import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = props => {
  const { headerFooterVisibility } = props;
  const visible = headerFooterVisibility.value;

  return visible ? (
    <header className="jc-center flx">
      <h1>Header</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/aadkjl">Under construction</Link>
        </li>
      </ul>
    </header>
  ) : null;
};

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Header);
