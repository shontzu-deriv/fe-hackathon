import "./App.css";
import Nav from "./Components/Nav.jsx";
import Footer from "./Components/Footer";
import "./fetch";
import AboutUs from "./Pages/AboutUs";
import House from "./Pages/House";
import Staffs from "./Pages/Staffs";
import Students from "./Pages/Students";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <Nav />
        <Routes>
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="House" element={<House />} />
          <Route path="Staffs" element={<Staffs />} />
          <Route path="Students" element={<Students />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
