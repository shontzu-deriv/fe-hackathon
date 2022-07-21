import React, { useEffect } from "react";
import { getStaff } from "../../fetch";
import "../Students/index.css";

const Staffs = () => {
  const [staffs, setStaffs] = React.useState([]);
  const [modal, setModal] = React.useState(undefined);

  // wrap fetch in useEffect watch empty array (triggers on Mount)
  useEffect(() => {
    getStaff().then(setStaffs);
  }, []);

  return (
    <div>
      <div className="student-staffs-main-container">
        {staffs.map(function (key, index) {
          return (
            <div className="card" key={index} onClick={() => setModal(key)}>
              <img
                src={
                  key.image !== ""
                    ? key.image
                    : "https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png"
                }
                alt=""
              />
              <h2>{key.name}</h2>
            </div>
          );
        })}
      </div>

      {/* {prop ? true : false}
      {<> ? <> : <>}    */}
      {modal ? (
        <div className="modal-bg">
          <div className="modal">
            <button id="modal-btn" onClick={() => setModal(undefined)}>
              X
            </button>
            <h1>
              {modal.name}, {modal.gender}
            </h1>
            <hr />
            TODO: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            ea dolorum illo assumenda recusandae ullam quia cumque. Totam sint
            harum blanditiis alias? Temporibus consequatur quod minus magnam
            quas, rerum reprehenderit.
          </div>
        </div>
      ) : (
        <div classname="modal-bg"></div>
      )}
    </div>
  );
};

export default Staffs;
