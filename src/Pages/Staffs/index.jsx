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
    <div className="main-container">
      <div>
        {staff.filter(t=>t.image&&true).map(function (key, index) {
          return (
            <div
              className="card"
              key={index}
              onClick={() => {
                alert(`TEST: ${key.name}`);
              }}
            >
              <img src={key.image} alt=""/>
              {/* <i>{key.image||"no image"}</i> */}
              <span>{key.name}</span>
              <span>{'>'}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Staffs;
