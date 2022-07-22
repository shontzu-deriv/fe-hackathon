import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, firestore } from "../../firebase-config";
import { doc, docRef, getDoc } from "firebase/firestore";

import "./index.css";

const Forum = () => {
  const [user, setUser] = React.useState(undefined);
  const [house, setHouse] = React.useState("");
  const [subject, setSubject] = React.useState([]);
  const [year, setYear] = React.useState();

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
      console.log(user.data());
      // console.log(user.data().house);
      // console.log(user.data().userEmail);
      setHouse(user.data().house);
      setSubject(user.data().subjectList);
      setYear(user.data().year);
      console.log("house: " + house);
      console.log("subjects: " + subject);
      console.log("year: " + year);
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
              <h2>This is your Hogwarts Profile</h2>
              <hr />
              <li>
                <b>{user.email}</b>
              </li>
              {/* <li>House: {house}</li> */}
              <li>Current year: Year {year} </li>
              <button onClick={logout}>logout</button>
            </div>

            <div>
              <h2>Subject List</h2>
              <hr />
              <li>
                {subject.map((subject, index) => (
                  <option value={subject} key={subject + index}>
                    {subject}
                  </option>
                ))}
              </li>
            </div>
          </div>
          <hr />
          <h1 className="profile">You are in {house}</h1>
          <p
            style={{
              paddingLeft: "100px",
              paddingRight: "100px",
              paddingBottom: "100px",
            }}
          >
            {house == "Gryffindor" && (
              <p>
                The Gryffindor house emphasised the traits of courage as well as
                'daring, nerve, and chivalry',and thus its members were
                generally regarded as brave, though sometimes to the point of
                recklessness. Some Gryffindors had also been noted to be
                short-tempered.
              </p>
            )}
            {house == "Slytherin" && (
              <p>
                Slytherins tended to be ambitious, shrewd, cunning, strong
                leaders, and achievement-oriented. They also had highly
                developed senses of self-preservation.[10] This means that
                Slytherins tended to hesitate before acting, so as to weigh all
                possible outcomes before deciding exactly what should be done.
              </p>
            )}
            {house == "Hufflepuff" && (
              <p>
                Students belonging to this house were known to be hard-working,
                friendly, loyal, honest and rather impartial. It might be that
                due to their values, Hufflepuffs were not as competitive as the
                other houses, and were more modest about their accomplishments.
                Hufflepuff was the most inclusive among the four houses; valuing
                hard work, dedication, patience, loyalty, and fair play rather
                than a particular aptitude in its students. Hufflepuffs were
                known to have a strong moral code, and a sense of right and
                wrong. Hufflepuffs were usually accepting of everyone. Students
                in Hufflepuff were known to value everyone and treat them as
                equal.
              </p>
            )}
            {house == "Ravenclaw" && (
              <p>
                Ravenclaw House prized learning, wisdom, wit, and intellect in
                its members. Thus, many Ravenclaws tended to be academically
                motivated and talented students. They also prided themselves on
                being original in their ideas, and methods. It was not unusual
                to find Ravenclaw students practising especially different types
                of magic that other houses might shun. Hermione Granger, an
                extremely intelligent witch and the top student in her year, was
                sorted into Gryffindor, though she admitted that the Sorting Hat
                had seriously considered placing her in Ravenclaw.
              </p>
            )}
          </p>
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
