import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../../firebase-config";

import "./index.css";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [registerEmail, setRegisterEmail] = React.useState("");
  const [registerPassword, setRegisterPassword] = React.useState("");
  const optionRef=React.useRef();

  const register = async () => {
    // if(!optionRef.current)throw "FML"
    try {
      //catch the value
      const val=optionRef.current.value;
      //create the user
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      //after it done lets create the stuffs
      const docRef=doc(firestore,"Users",user.user.uid);
        await setDoc(docRef,{
          userEmail: registerEmail,
          house:val
        });
        alert("Welcome " + registerEmail )
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
      <select name="house" ref={optionRef}>
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
