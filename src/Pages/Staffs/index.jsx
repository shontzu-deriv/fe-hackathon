import React, { useEffect } from "react";
import { getStaff } from "../../fetch";

const Staffs = () => {
  const [staff, setStaff] = React.useState([]);

  // wrap fetch in useEffect watch empty array (triggers on Mount)
  useEffect(() => {
    getStaff().then(setStaff)
  }, []);

  return (
    <div>
      {staff.map(function (key, index) {
        return (
          <div key={index}>
            <b>name: </b>
            {key.name}
            <br />
            <b>dob: </b>
            {key.dateOfBirth}
            <br />
            <b>house: </b>
            {key.house}
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Staffs;
