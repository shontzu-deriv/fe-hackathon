import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import "./index.css";

const Login = () => {
  const [loginEmail, setLoginEmail] = React.useState("");
  const [loginPassword, setLoginPassword] = React.useState("");
  const [userHouse, setUserHouse] = React.useState("");

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword,
        userHouse
      );
      console.log(user);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="form">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => {
          setLoginEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setLoginPassword(e.target.value);
        }}
      />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
