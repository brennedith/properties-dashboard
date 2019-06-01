/* Stateless functional component */

import React from "react";

import "./Nav.css";

const Nav = () => {
  return (
    <nav className="NavBar">
      <p className="logo">
        <a href="/">Company Logo</a>
      </p>
      <ul>
        <li>
          <a href="/">Customers</a>
        </li>
        <li className="active">
          <a href="/">Properties</a>
        </li>
        <li>
          <a href="/">Reports</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
