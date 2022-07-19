import { Link, Outlet } from "react-router-dom";
import "./index.css";

const House = () => {
  return (
    <div className="subnav-content">
      <Link to="/house/gryffindor"> Gryffindor </Link>
      <Link to="/house/ravenclaw"> Ravenclaw </Link>
      <Link to="/house/hufflepuff"> Hufflepuff </Link>
      <Link to="/house/slytherin"> Slytherin </Link>
      <div className="main-container">
        <Outlet />
      </div>
    </div>
  );
};

export default House;
