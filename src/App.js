import Nav from "./Components/Nav.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Pages/Home.jsx";
import House from "./Pages/House";
import HouseDetails from "./Pages/House/houseDetails";
import Staffs from "./Pages/Staffs";
import Students from "./Pages/Students";
import Profile from "./Pages/Profile";
import Login from "./Pages/Profile/login.jsx";
import Register from "./Pages/Profile/register.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/AboutUs/About.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<Home />} />
          <Route path="aboutus" element={<About />} />
          <Route path="/house" element={<House />}>
            <Route path=":house" element={<HouseDetails />} />
          </Route>
          <Route path="staffs" element={<Staffs />} />
          <Route path="students" element={<Students />} />
          <Route path="/profile" element={<Profile />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
