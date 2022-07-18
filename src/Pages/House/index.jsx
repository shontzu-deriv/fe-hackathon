import React, { useEffect } from "react";
import { getHouse } from "../../fetch";

const House = () => {
  const [house, changeHouse] = React.useState([]);

  // wrap fetch in useEffect watch empty array (triggers on Mount)
  // useEffect(() => {
  //   getHouse()
  // }, []);

  const setHouse = (param) => {
    getHouse(param).then(changeHouse);
  };

  return (
    <div>
      <button onClick={() => setHouse("gryffindor")}>Gryffindor</button>
      <button onClick={() => setHouse("ravenclaw")}>Ravenclaw</button>
      <button onClick={() => setHouse("hufflepuff")}>Hufflepuff</button>
      <button onClick={() => setHouse("slytherin")}>Slytherin</button>

      <div>
        {house.map(function (key, index) {
          return (
            <div key={index}>
              <b>name: </b>
              {key.name}
              <br />
              <b>dob: </b>
              {key.dateOfBirth}
              <br />
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default House;
