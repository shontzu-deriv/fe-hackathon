import React from "react";
import { Link, Outlet } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase-config";

const Forum = () => {
  const [user, setUser] = React.useState("");

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      {user ? (
        <div>
          <h1>Logged in</h1>
          <button onClick={logout}>logout</button>
        </div>
      ) : (
        <div>
          <h1>Please Log In First</h1>
          <Link to="/forum/login">Log In</Link>
          <Link to="/forum/register">Register</Link>
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default Forum;
