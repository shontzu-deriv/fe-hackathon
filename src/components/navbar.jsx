import React, { useState } from "react";
import "../components/navbar.css";

function Navbar() {
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
        <a href="#" className="nav___brand">
          LOGO
        </a>
        <ul className={active}>
          <li className="nav___item">
            <a href="#" className="nav___link">
              CREATE YOUR TEAM
            </a>
          </li>
          <li className="nav___item">
            <a href="#" className="nav___link">
              STAFF
            </a>
          </li>
          <li className="nav___item">
            <a href="#" className="nav___link">
              STUDENT
            </a>
          </li>
          <li className="nav___item">
            <a href="#" className="nav___link">
              ABOUT US
            </a>
          </li>
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

export default Navbar;
