import "./App.css";
import Nav from "./Components/Nav.jsx";
import Footer from "./Components/Footer.jsx";
import "./fetch";
import AboutUs from "./Pages/AboutUs";
import House from "./Pages/House";
import HouseDetails from "./Pages/House/houseDetails";
import Staffs from "./Pages/Staffs";
import Students from "./Pages/Students";
// import CreateTeam from "./Pages/CreateTeam";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="flex">
      <div>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="/house" element={<House />}>
              <Route path=":house" element={<HouseDetails />} />
            </Route>
            <Route path="staffs" element={<Staffs />} />
            <Route path="students" element={<Students />} />
            {/* <Route path="createteam" element={<CreateTeam />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
