// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS2Y_ldCxH6yliPAH8_lbc2Cjpq3hosZE",
  authDomain: "besquare-hogwarts.firebaseapp.com",
  projectId: "besquare-hogwarts",
  storageBucket: "besquare-hogwarts.appspot.com",
  messagingSenderId: "539209426871",
  appId: "1:539209426871:web:bea2d4e395c01e03fe2a32",
  measurementId: "G-L2JHVR4174"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);