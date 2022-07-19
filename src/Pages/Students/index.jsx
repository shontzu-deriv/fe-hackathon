import React, { useEffect } from "react";
import { getStudents } from "../../fetch";
import "./index.css";

const Students = () => {
  const [students, setStudents] = React.useState([]);

  // wrap fetch in useEffect watch empty array (triggers on Mount)
  useEffect(() => {
    getStudents().then(setStudents);
  }, []);

  return (
<<<<<<< HEAD
    <div>
      {/* <button onClick={getStudents}>getStudents</button> */}
      <div className="main-container">
        {students.map(function (key, index) {
          return (
            <div className="card" key={index}>
              <b>name: </b>
              {key.name}
              <br />
              <b>actor: </b>
              {key.actor}
              <br />
              <b>ancestry: </b>
              {key.ancestry}
              <br />
              <b>dob: </b>
              {key.dateOfBirth}
              <br />
              <b>eyeColour: </b>
              {key.eyeColour}
              <br />
              <b>house: </b>
              {key.house}
              <hr />
            </div>
          );
        })}
=======
    <div className="main-container">
      <div>
        {students
          .filter((t) => t.image && true)
          .map(function (key, index) {
            return (
              <div
                className="card"
                key={index}
                onClick={() => {
                  alert(`TEST: ${key.name}`);
                }}
              >
                <img src={key.image} alt="" />

                <span>{key.name}</span>
                <span>{">"}</span>
              </div>
            );
          })}
>>>>>>> fd031b3bb81bcafe31205b88177da819184a8b43
      </div>
    </div>
  );
};

export default Students;
