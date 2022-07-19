import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Components/index.css";

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
    <div>
      <nav className="nav">
        <Link to="/app" className="nav___brand">
          LOGO
        </Link>
        <ul className={active}>
          <Link to="/aboutus" className="nav___item">
            ABOUT US
          </Link>
          <Link to="/house" className="nav___item">
            HOUSE
          </Link>
          <Link to="/staffs" className="nav___item">
            STAFFS
          </Link>
          <Link to="/students" className="nav___item">
            STUDENT
          </Link>
          <Link to="/createteam" className="nav___item">
            CREATE TEAM
          </Link>
        </ul>

        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
