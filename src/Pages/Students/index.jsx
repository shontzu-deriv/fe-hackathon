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
        {students
          //.filter((t) => t.image && true)
          .map(function (key, index) {
            return (
              <div
                className="card"
                key={index}
                onClick={() => {
                  alert(`TEST: ${key.name}`);
                }}
              >
                <img src={key.image !== "" ? key.image : "https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png"} alt=""/>

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
