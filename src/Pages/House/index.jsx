import { Link, Outlet } from "react-router-dom";
import "./index.css";

const House = () => {
  return (
    <div>
      <div className="subnav-content">
        <Link to="/house/Gryffindor">
          <img src="https://i.ibb.co/2vrphnd/Gryffindor.png" alt="Griffindor" />
        </Link>
        <Link to="/house/Ravenclaw">
          <img src="https://i.ibb.co/hsQwRbQ/Ravenclaw.png" alt="Ravenclaw" />
        </Link>
        <Link to="/house/Hufflepuff">
          <img src="https://i.ibb.co/Ybz47gs/Hufflepuff.png" alt="Hufflepuff" />
        </Link>
        <Link to="/house/Slytherin">
          <img src="https://i.ibb.co/BzmD2tc/Slytherin.png" alt="Slytherin" />
        </Link>
      </div>
      {!(<Outlet />) ? <h1>choose a house</h1> : <Outlet />}
    </div>
  );
};

export default House;
