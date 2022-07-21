import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import "./index.css";

const Register = () => {
  const [registerEmail, setRegisterEmail] = React.useState("");
  const [registerPassword, setRegisterPassword] = React.useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="form">
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => {
          setRegisterEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setRegisterPassword(e.target.value);
        }}
      />
      <select name="house">
        {/* HOW TO??? */}
        {/* onChange={setUserHouse(house)} */}
        {["gryffindor", "hufflepuff", "ravenclaw", "slytherin"].map(
          (house, index) => (
            <option value={house} key={house + index}>
              {house}
            </option>
          )
        )}
      </select>
      <button onClick={register}>Register</button>
    </div>
  );
};

export default Register;
