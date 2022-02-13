// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5t7wGcIeGxVXxAfwX-AFaG-kmCIwbjhY",
  authDomain: "crud-react-d21d0.firebaseapp.com",
  projectId: "crud-react-d21d0",
  storageBucket: "crud-react-d21d0.appspot.com",
  messagingSenderId: "1009485640350",
  appId: "1:1009485640350:web:be3b8a267a045aa114818f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const googleAuthProvider = new GoogleAuthProvider();

export { app, db, googleAuthProvider };
