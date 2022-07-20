import React from "react";
import { Link, Outlet } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import "./index.css";

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
          <div className="profile">
            <div>
              <p><b>logged in as {user.email}</b></p>
              <p>House: Gryffindor </p>
              <p>Age: 22 </p>
              <p>Joined: dd/mm/yyyy</p>
            </div>

            <div>
              <h1>This is your Hogwarts Profile</h1>
              <hr />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
              mollitia vero aut tenetur quasi eius voluptatem perferendis magni
              reprehenderit, quaerat ad ullam officiis? Sequi, sed debitis eius
              saepe odio nesciunt.</p>
              <button onClick={logout}>logout</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="form">
          <h1>You are not logged in</h1>
          <nav>
            <Link to="/forum/login">Log In</Link>
            <Link to="/forum/register">Register</Link>
          </nav>
          {user ? <></> : <Outlet />}
          <hr />
        </div>
      )}
    </div>
  );
};

export default Forum;
