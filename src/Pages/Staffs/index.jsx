import React from "react";

const Staffs = () => {
  const [staff, setStaff] = React.useState([]);

  //connect to resource
  //TODO: wrap fetch in useEffect watch empty array (meaning, triggersgit onMount)
  // useEffect(()=>{
  async function getStaff() {
    await fetch("http://hp-api.herokuapp.com/api/characters/staff", {
      method: "GET",
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return setStaff(json);
      });
  }
  // },[])

  return (
    <div>
      <button onClick={getStaff}>getStaff</button>
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
    </div>
  );
};

export default Staffs;
