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
      </div>
    </div>
  );
};

export default Students;
