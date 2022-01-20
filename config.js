import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo57jJQm89QYdnabQH4xJrZ5ZLXPFloTU",
  authDomain: "e-ride-91fa1.firebaseapp.com",
  projectId: "e-ride-91fa1",
  storageBucket: "e-ride-91fa1.appspot.com",
  messagingSenderId: "919607045579",
  appId: "1:919607045579:web:1afee7c4dbc7283732da4e"
};

// Initialize Firebase
const app=initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


