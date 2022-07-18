import React, {useEffect} from "react";

const Students = () => {
  const [students, setStudents] = React.useState([]);

  //connect to resource
  //TODO: wrap fetch in useEffect watch empty array (meaning, triggersgit onMount)
  // useEffect(()=>{
    async function getStudents() {
      await fetch("http://hp-api.herokuapp.com/api/characters/students", { method: "GET" })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((json) => {
          console.log(json);
          return setStudents(json);
        });
    }
  // },[])


  return (
    <div>
      <button onClick={getStudents}>getStudents</button>
      <div>
        {students.map(function (key, index) {
          return (
            <div key={index}>
              <b>name: </b>
              {key.name}
              <br />
              <b>actor: </b>
              {key.actor}
              <br />
              <b>ancestry: </b>
              {key.ancestry}
              <br />
              <b>dob: </b>
              {key.dateOfBirth}
              <br />
              <b>eyeColour: </b>
              {key.eyeColour}
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

export default Students;
