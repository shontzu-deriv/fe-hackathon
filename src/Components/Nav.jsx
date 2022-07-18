import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutUs from "../Pages/AboutUs";
import House from "../Pages/House";
import Staffs from "../Pages/Staffs";
import Students from "../Pages/Students";

export const Nav = () => {
  return (
    <div>
      <BrowserRouter>
        <Link to="/AboutUs">About Us</Link>
        <Link to="/House">House</Link>
        <Link to="/Staffs">Staffs</Link>
        <Link to="/Students">Students</Link>
        <Routes>
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="House" element={<House />} />
          <Route path="Staffs" element={<Staffs />} />
          <Route path="Students" element={<Students />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Nav;
