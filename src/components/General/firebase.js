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
  apiKey: "AIzaSyDT2jq_v4nLa3hGmzhr1Z9LdzAKFC1sHRA",
  authDomain: "gilbertsolutions-88dc8.firebaseapp.com",
  projectId: "gilbertsolutions-88dc8",
  storageBucket: "gilbertsolutions-88dc8.appspot.com",
  messagingSenderId: "387671078978",
  appId: "1:387671078978:web:9aeca22690b46f6b7955db",
  measurementId: "G-QYYDPS8GBJ"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
