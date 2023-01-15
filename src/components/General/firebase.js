// Import the functions you need from the SDKs you need
//import firebase from "firebase";
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9dWg3MBf22XEdllq28F7Bi9ZeH51eRQs",
  authDomain: "patient1-a87a2.firebaseapp.com",
  projectId: "patient1-a87a2",
  storageBucket: "patient1-a87a2.appspot.com",
  messagingSenderId: "89760376220",
  appId: "1:89760376220:web:7ce965cdd1226657639459",
  measurementId: "G-MELKFVTGNS",
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
