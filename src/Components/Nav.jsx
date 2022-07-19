import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export const Nav = () => {
  return (
    <nav>
      <div>
        <Link to="/aboutus">About Us</Link>
        <Link to="/house">House</Link>
        <Link to="/staffs">Staffs</Link>
        <Link to="/students">Students</Link>
      </div>
    </nav>
  );
};

export default Nav;
