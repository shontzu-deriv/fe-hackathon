import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export const Nav = () => {
  return (
    <div className="topnav">
      <a>
        <Link to="/aboutus">About Us</Link>
      </a>
      <a>
        <Link to="/house">House</Link>
      </a>
      <a>
        <Link to="/staff">Staffs</Link>
      </a>
      <a>
        <Link to="/students">Students</Link>
      </a>
    </div>
  );
};

export default Nav;
