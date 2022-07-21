import React, { useEffect } from "react";
import { useParams } from "react-router";
import { getHouse } from "../../fetch";
import "../Students/index.css";

export const HouseDetails = () => {
  const [houseDetails, setHouseDetails] = React.useState([]);
  const [modal, setModal] = React.useState(undefined);

  const { house } = useParams();
  // wrap fetch in useEffect watch empty array (triggers on Mount)
  useEffect(() => {
    // prop updated but only trigger onMount, need to pass the prop into the watch array to rerender UI
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

      {modal ? (
        <div className="modal-bg">
          <div className="modal">
            <button id="modal-btn" onClick={() => setModal(undefined)}>
              X
            </button>
            <div className="modal-body">
              <img src={modal.image} />
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
              <p>{modal.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <div classname="modal-bg"></div>
      )}
    </div>
  );
};

export default HouseDetails;
