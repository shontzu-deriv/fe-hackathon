import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Components/navbar.css";

function Nav() {
  const [active, setActive] = useState("nav___menu");
  const [toggleIcon, setToggleIcon] = useState("nav___toggler");

  const navToggle = () => {
    active === "nav___menu"
      ? setActive("nav___menu nav___active")
      : setActive("nav___menu");

    // TogglerIcon

    toggleIcon === "nav___toggler"
      ? setToggleIcon("nav___toggler toggle")
      : setToggleIcon("nav___toggler");
  };

  return (
<<<<<<< HEAD
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
=======
    <div>
      <nav className="nav">
        <Link to="/app" className="nav___brand">
          LOGO
        </Link>
        <ul className={active}>
          <li className="nav___item">
            <Link to="/aboutus" className="nav___link">
              ABOUT US
            </Link>
          </li>
          <li className="nav___item">
            <Link to="/house" className="nav___link">
              HOUSE
            </Link>
          </li>
          <li className="nav___item">
            <Link to="/staffs" className="nav___link">
              STAFFS
            </Link>
          </li>
          <li className="nav___item">
            <Link to="/students" className="nav___link">
              STUDENT
            </Link>
          </li>
        </ul>

        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
)}
>>>>>>> fd031b3bb81bcafe31205b88177da819184a8b43

export default Nav;
