import React, { useEffect } from "react";
import { useParams } from "react-router";
import { getHouse } from "../../fetch";
import "../Students/index.css";

export const HouseDetails = () => {
  const [houseDetails, setHouseDetails] = React.useState([]);

  const { house } = useParams();
  // wrap fetch in useEffect watch empty array (triggers on Mount)
  useEffect(() => {
    // prop updated but didn't trigger onMount, need to pass the prop into the watch array to rerender UI
    setHouseDetails([]);
    getHouse(house).then(setHouseDetails);
  }, [house]);

  return (
    <div>
      <div className={house}>
        <h1 className="house-name-body">{house}</h1>
      </div>
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
              <img src={key.image !== "" ? key.image : "https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png"} alt=""/>
              <h2>{key.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HouseDetails;
