//connect to resource
async function getStudents() {
  return await fetch(
    "http://own-hp-api.herokuapp.com/api/characters/students",
    {
      method: "GET",
    }
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((json) => {
      console.log(json);
      return json;
    });
}

async function getStaff() {
  return await fetch("http://own-hp-api.herokuapp.com/api/characters/staff", {
    method: "GET",
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((json) => {
      console.log(json);
      return json;
    });
}

async function getHouse(house) {
  return await fetch(
    `http://own-hp-api.herokuapp.com/api/characters/house/${house}`,
    {
      method: "GET",
    }
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((json) => {
      console.log(json);
      return json;
    });
}

export { getStudents, getStaff, getHouse };
