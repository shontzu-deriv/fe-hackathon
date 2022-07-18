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
    <div>
      <div className="main-container">
        <button onClick={getStudents}>getStudents</button>
        <div>
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
        </div>
      </div>
    </div>
  );
};

export default Students;
