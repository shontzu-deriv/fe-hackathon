import React, { useEffect } from "react";
import { getStaff } from "../../fetch";
import "./index.css";

const Staffs = () => {
  const [staff, setStaff] = React.useState([]);

  // wrap fetch in useEffect watch empty array (triggers on Mount)
  useEffect(() => {
    getStaff().then(setStaff);
  }, []);

  return (
    <div>
      <div className="main-container">
        {staff
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
                {/* {!key.image ? <> : <>} */}
                <img src={key.image !== "" ? key.image : "https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png"} alt=""/>
                <span>{key.name}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Staffs;
