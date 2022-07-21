import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, firestore } from "../../firebase-config";
import { doc, docRef, getDoc } from "firebase/firestore";

import "./index.css";

const Forum = () => {
  const [user, setUser] = React.useState(undefined);
  const [house, setHouse] = React.useState("");
  const [email, setEmail] = React.useState("");

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    if (!user) return;
    // console.log(user);
    const docRef = doc(firestore, "Users", user.uid);

    getDoc(docRef).then((user) => {
      // console.log(user)
      // console.log(user.data());
      // console.log(user.data().house);
      // console.log(user.data().userEmail);
      setHouse(user.data().house);
      console.log("house: " + house);
    });
  }, [user, house]);

  return (
    <div>
      {user ? (
        <div>
          <div className="banner">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1cccbcdd-92bd-44d6-b5f6-d7959eddf41b/d3jcvxa-c2b65d35-e3fe-46ce-bf06-9a3cf4fa56f4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFjY2NiY2RkLTkyYmQtNDRkNi1iNWY2LWQ3OTU5ZWRkZjQxYlwvZDNqY3Z4YS1jMmI2NWQzNS1lM2ZlLTQ2Y2UtYmYwNi05YTNjZjRmYTU2ZjQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gKIHpQpi3MDTaTYvMJiG4biL5Db1MWk3FLgc0kGqo-E"
              alt=""
            />
          </div>
          <div className="profile">
            <div>
              <p>
                <b>{user.email}</b>
              </p>
              <p>House: {house}</p>
              <p>Age: 22 </p>
              <p>Joined: dd/mm/yyyy</p>
            </div>

            <div>
              <h2>This is your Hogwarts Profile</h2>
              <hr />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
                mollitia vero aut tenetur quasi eius voluptatem perferendis
                magni reprehenderit, quaerat ad ullam officiis? Sequi, sed
                debitis eius saepe odio nesciunt.
              </p>
              <button onClick={logout}>logout</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="form">
          <nav>
            <Link to="/profile/login">
              <div className="link">Log In</div>
            </Link>
            <Link to="/profile/register">
              <div className="link">Register</div>
            </Link>
          </nav>
          {user ? <></> : <Outlet />}
          <hr />
        </div>
      )}
    </div>
  );
};

export default Forum;
