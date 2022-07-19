import React, { useEffect } from "react";
import { useParams } from "react-router";
import { getHouse } from "../../fetch";

export const HouseDetails = () => {
  const [houseDetails, setHouseDetails] = React.useState([]);

  // wrap fetch in useEffect watch empty array (triggers on Mount)
  useEffect(() => {
    getHouse(house).then(setHouseDetails);
  }, []);

  const { house } = useParams();
  return <div>{house} at here</div>;
};

export default HouseDetails;
