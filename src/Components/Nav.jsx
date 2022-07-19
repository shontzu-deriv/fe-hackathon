import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
// import AboutUs from "../Pages/AboutUs";
// import House from "../Pages/House";
// import Staffs from "../Pages/Staffs";
// import Students from "../Pages/Students";
=======
>>>>>>> 7f67a1f1019ad78ae7dfada09ac811b7d9be9501
import "./index.css";

export const Nav = () => {
  return (
<<<<<<< HEAD
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
=======
    <nav>
      <div>
        <Link to="/aboutus">About Us</Link>
        <Link to="/house">House</Link>
        <Link to="/staff">Staffs</Link>
        <Link to="/students">Students</Link>
      </div>
    </nav>
>>>>>>> 7f67a1f1019ad78ae7dfada09ac811b7d9be9501
  );
};

export default Nav;
