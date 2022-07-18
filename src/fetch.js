// import React from "react";

// const [resource, setresource] = React.useState();
// const [comments, setComments] = React.useState([]);

  //connect to resource
  async function getComments() {
    await fetch("https://jsonplaceholder.typicode.com/comments", { method: "GET" })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        // return setComments(json);
      });

  }