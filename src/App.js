import Nav from "./Components/Nav.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Pages/Home.jsx";
import AboutUs from "./Pages/AboutUs";
import House from "./Pages/House";
import HouseDetails from "./Pages/House/houseDetails";
import Staffs from "./Pages/Staffs";
import Students from "./Pages/Students";
import CreateTeam from "./Pages/CreateTeam";
import Forum from "./Pages/Forum";
import Login from "./Pages/Forum/login.jsx"
import Register from "./Pages/Forum/register.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="/house" element={<House />}>
            <Route path=":house" element={<HouseDetails />} />
          </Route>
          <Route path="staffs" element={<Staffs />} />
          <Route path="students" element={<Students />} />
          <Route path="createteam" element={<CreateTeam />} />
          <Route path="/forum" element={<Forum />}>
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
