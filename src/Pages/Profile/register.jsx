import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../../firebase-config";
import { doc, setDoc, getDoc, getFirestore } from "firebase/firestore";
import "./index.css";

const Register = () => {
  const houseRef = React.useRef();
  const yearRef = React.useRef();
  const [registerEmail, setRegisterEmail] = React.useState("");
  const [registerPassword, setRegisterPassword] = React.useState("");
  let [subjectList, setSubjectList] = React.useState([]);
  const coreClasses = [
    "Astronomy",
    "Charms",
    "Defense Against the Dark Arts",
    "Herbology",
    "History of Magic",
    "Potions",
    "Transfiguration",
  ];
  const year3 = [
    "Arithmacy",
    "Care of Magical Creatures",
    "Divination",
    "Muggle Studies",
    "Study of Ancient Runes",
  ];
  const year6 = ["Advanced Arithmacy", "Alchemy", "Apparition"];

  const register = async () => {
    // if(!houseRef.current)throw "FML"
    try {
      //catch the value
      const house = houseRef.current.value;
      const year = yearRef.current.value;
      //create the user
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      //after it done lets create the stuffs
      if (year === "1") {
        subjectList = coreClasses;
      } else if (year === "3") {
        subjectList = year3;
      } else {
        subjectList = year6;
      }
      //post the changes
      setSubjectList(subjectList);

      const docRef = doc(firestore, "Users", user.user.uid);
      let g = await setDoc(docRef, {
        userEmail: registerEmail,
        house: house,
        year: year,
        subjectList: subjectList,
      });
      console.log(subjectList);
      alert("Welcome " + registerEmail);
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
      <div style={{ display: "flex" }}>
        <select name="house" ref={houseRef}>
          {["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"].map(
            (house, index) => (
              <option value={house} key={house + index}>
                {house}
              </option>
            )
          )}
        </select>
        <select name="year" ref={yearRef}>
          {[1, 3, 6].map((year, index) => (
            <option value={year} key={year + index}>
              Year {year}
            </option>
          ))}
        </select>
      </div>
      <button onClick={register} style={{ width: "100%" }}>
        Register
      </button>
    </div>
  );
};

export default Register;
