import React from "react";
import { Link } from "react-router-dom";
// import AboutUs from "../Pages/AboutUs";
// import House from "../Pages/House";
// import Staffs from "../Pages/Staffs";
// import Students from "../Pages/Students";
import "./index.css";

export const Nav = () => {
  return (
    <div className="topnav">
      {/* <BrowserRouter> */}
      <a>
        <Link to="/AboutUs">About Us</Link>
      </a>
      <a>
        <Link to="/House">House</Link>
      </a>
      <a>
        <Link to="/Staffs">Staffs</Link>
      </a>
      <a>
        <Link to="/Students">Students</Link>
      </a>
      {/* </BrowserRouter> */}
    </div>
  );
};

export default Nav;
