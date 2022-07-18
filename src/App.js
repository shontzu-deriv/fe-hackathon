import "./App.css";
import Nav from "./Components/Nav.jsx";
import Footer from "./Components/Footer";
import { getStaff, getStudents } from "./fetch"

function App() {
  return (
    <div className="">
      <Nav />
      <Footer />
    </div>
  );
}

export default App;
