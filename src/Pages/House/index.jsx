import React, { useEffect } from "react";
import { getHouse } from "../../fetch";
import {
  Link,
  useParams,
  Outlet,
} from "react-router-dom";

const House = () => {
  const [house, setHouse] = React.useState([]);

  // wrap fetch in useEffect watch empty array (triggers on Mount)
  useEffect(() => {
    getHouse().then(setHouse).then(console.log(house));
  }, []);

  // const seeHouse = (param) => {
  //   getHouse(param).then(setHouse);
  // };

  // const seeDetails = (id) => {
  //   console.log(id);
  // };

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

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { house } = useParams();

  return (
    <div>
      <h3>ID: {house}</h3>
    </div>
  );
}

export default House;
