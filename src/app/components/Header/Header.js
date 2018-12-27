import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (props.visible) ? (
      <header>
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
}

export default Header;
