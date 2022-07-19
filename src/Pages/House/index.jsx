import { Link, Outlet } from "react-router-dom";

const House = () => {
  return (
    <div className="">
      <Link to="/house/gryffindor"> Gryffindor </Link>
      <Link to="/house/ravenclaw"> Ravenclaw </Link>
      <Link to="/house/hufflepuff"> Hufflepuff </Link>
      <Link to="/house/slytherin"> Slytherin </Link>
      <Outlet />
    </div>
  );
};

export default House;
