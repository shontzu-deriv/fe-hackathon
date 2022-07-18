import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About_Us from "../Pages/About_Us";
import House from "../Pages/House";
import Staffs from "../Pages/Staffs";
import Students from "../Pages/Students";

export const Nav = () => {
  return (
    <div>
      <BrowserRouter>
        <Link to="/About_Us">About Us</Link>
        <Link to="/House">House</Link>
        <Link to="/Staffs">Staffs</Link>
        <Link to="/Students">Students</Link>
        <Routes>
          <Route path="About_Us" element={<About_Us />} />
          <Route path="House" element={<House />} />
          <Route path="Staffs" element={<Staffs />} />
          <Route path="Students" element={<Students />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Nav;
