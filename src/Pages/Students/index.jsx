import React, { useEffect } from "react";
import { getStudents } from "../../fetch";
import "./index.css";

const Students = () => {
  const [students, setStudents] = React.useState([]);
  const [modal, setModal] = React.useState(undefined);

  // wrap fetch in useEffect watch empty array (triggers on Mount)
  useEffect(() => {
    getStudents().then(setStudents);
  }, []);

  return (
    <div>
      <div className="subheader-color">
        <h1 className="subheader">Students</h1>
      </div>
      <div className="student-staffs-main-container">
        {students
          .filter((obj) => obj.image !== "")
          .map(function (key, index) {
            return (
              <div className="card" key={index} onClick={() => setModal(key)}>
                <img src={key.image} alt="" />
                <h2 data-aos="fade-up">{key.name}</h2>
              </div>
            );
          })}
      </div>
      <div className="subheader-color">
        <h1 className="subheader">... and others</h1>
        <div className="bottom-others">
          {students
            .filter((obj) => obj.image === "")
            .map(function (key, index) {
              return (
                <div
                  className="others"
                  key={index}
                  onClick={() => setModal(key)}
                >
                  <li>{key.name}</li>
                </div>
              );
            })}
        </div>
      </div>

      {/* {prop ? true : false}
      {<> ? <> : <>}    */}
      {modal ? (
        <div className="modal-bg">
          <div className="modal">
            <button id="modal-btn" onClick={() => setModal(undefined)}>
              X
            </button>
            <div className="modal-body">
              <img
                src={
                  modal.image !== ""
                    ? modal.image
                    : "https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png"
                }
                alt=""
              />
            </div>
            <div className="modal-body">
              <h1>{modal.name}</h1>
              <p>
                <b>Gender: </b>
                {modal.gender}
              </p>
              <p>
                <b>Species: </b>
                {modal.species}
              </p>
              <hr />
              <div className="modal-body-desc">
                <p>{modal.description}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div classname="modal-bg"></div>
      )}
    </div>
  );
};

export default Students;
