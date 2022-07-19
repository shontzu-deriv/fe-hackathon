import React, { useEffect } from "react";
import { getStaff, getStudents } from "../../fetch";
import "./index.css";

const CreateTeam = () => {
  const [staff, setStaff] = React.useState([]);
  const [students, setStudents] = React.useState([]);

  // wrap fetch in useEffect watch empty array (triggers on Mount)
  useEffect(() => {
    getStaff().then(setStaff);
    getStudents().then(setStudents);
  }, []);

  return (
    <div>
      <h1 className="createTeamHeader">Create your dream team</h1>
      <div className="main-container">
        {staff
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
                {/* {!key.image ? <> : <>} */}
                <img
                  src={
                    key.image !== ""
                      ? key.image
                      : "https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png"
                  }
                  alt=""
                />
                <div>
                  <span>{key.name}</span>
                  <button>add</button>
                </div>
              </div>
            );
          })}

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
                {/* {!key.image ? <> : <>} */}
                <img
                  src={
                    key.image !== ""
                      ? key.image
                      : "https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png"
                  }
                  alt=""
                />
                <div>
                  <span>{key.name}</span>
                  <button>add</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CreateTeam;
