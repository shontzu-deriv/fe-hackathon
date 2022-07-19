import React, { useEffect } from "react";
import { useParams } from "react-router";
import { getHouse } from "../../fetch";
import "./index.css";

export const HouseDetails = () => {
  const [houseDetails, setHouseDetails] = React.useState([]);

  // wrap fetch in useEffect watch empty array (triggers on Mount)
  useEffect(() => {
    getHouse(house).then(setHouseDetails);
  }, []);

  const { house } = useParams();
  return (
    <div>
      <h1 className="house-name-body">{house}</h1>
      <div className="container">
        {houseDetails.map(function (key, index) {
          return (
            <div
              className="card"
              key={index}
              onClick={() => {
                alert(`TEST: ${key.name}`);
              }}
            >
              <span>{key.name}</span>
              <span>{">"}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HouseDetails;
