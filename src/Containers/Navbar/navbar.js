import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = (props) => {
  return (
    <>
      <ul>
        <li>
          <Link to="/countries">Countries</Link>
        </li>
        <li>
          <Link to="/country/AR">Single Country</Link>
        </li>
        <li>
          <Link to="/local">Local State</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
