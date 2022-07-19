import "./App.css";
import Nav from "./Components/Nav.jsx";
import Footer from "./Components/Footer";
import "./fetch";
import AboutUs from "./Pages/AboutUs";
import House from "./Pages/House";
import HouseDetails from "./Pages/House/houseDetails";
import Staffs from "./Pages/Staffs";
import Students from "./Pages/Students";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <div className="main-container">
        <Nav />
        <Routes>
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="/house" element={<House />}>
            <Route path=":house" element={<HouseDetails />} />
          </Route>
          <Route path="staffs" element={<Staffs />} />
          <Route path="students" element={<Students />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
=======
      <Nav />
      <Routes>
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="/house" element={<House />}>
          <Route path=":house" element={<HouseDetails />} />
        </Route>
        <Route path="staffs" element={<Staffs />} />
        <Route path="students" element={<Students />} />
      </Routes>
      <Footer />
>>>>>>> fd031b3bb81bcafe31205b88177da819184a8b43
    </BrowserRouter>
  );
}

export default App;
