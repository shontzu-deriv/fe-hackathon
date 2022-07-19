import { Link, Outlet } from "react-router-dom";
import "./index.css";

const House = () => {
  return (
<<<<<<< HEAD
    <div className="subnav-content">
      <Link to="/house/gryffindor"> Gryffindor </Link>
      <Link to="/house/ravenclaw"> Ravenclaw </Link>
      <Link to="/house/hufflepuff"> Hufflepuff </Link>
      <Link to="/house/slytherin"> Slytherin </Link>
      <div className="main-container">
        <Outlet />
      </div>
=======
    <div className="">
      <Link to="/house/gryffindor"> <img src="https://toppng.com/uploads/preview/howgarts-gryffindor-harrypotter-tumblr-griffindor-harry-potter-logo-11562874877dkmpqfudaz.png" alt=""/> </Link>
      <Link to="/house/ravenclaw"> <img src="https://w7.pngwing.com/pngs/563/589/png-transparent-ravenclaw-logo-ravenclaw-house-fictional-universe-of-harry-potter-common-room-hogwarts-gryffindor-harry-potter-ravenclaw-logo-helga-hufflepuff-slytherin-house.png" alt=""/> </Link>
      <Link to="/house/hufflepuff"> <img src="https://toppng.com/uploads/preview/escudo-gryffindor-png-hufflepuff-house-11563000685lwbmbe5zf8.png" alt="" /> </Link>
      <Link to="/house/slytherin"> <img src="https://toppng.com/uploads/preview/harry-potter-slytherin-logo-11549535063t3nuppcxfd.png" alt="" /> </Link>
      <Outlet />
>>>>>>> fd031b3bb81bcafe31205b88177da819184a8b43
    </div>
  );
};

export default House;
