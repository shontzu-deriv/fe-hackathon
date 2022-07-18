// import React from "react";

// const [resource, setresource] = React.useState();
// const [comments, setComments] = React.useState([]);

  //connect to resource
 async function getStudents() {
    await fetch("http://hp-api.herokuapp.com/api/students", { method: "GET" })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });

  };

async function getStaff() {
    await fetch("http://hp-api.herokuapp.com/api/staff", { method: "GET" })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });

  };

  export {getStudents, getStaff}