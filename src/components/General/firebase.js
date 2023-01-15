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
  apiKey: "AIzaSyD7WqWV6_gd4vJelcg-AX6f1AFLreHU0Z4",
  authDomain: "gilbert-98a99.firebaseapp.com",
  projectId: "gilbert-98a99",
  storageBucket: "gilbert-98a99.appspot.com",
  messagingSenderId: "498941917981",
  appId: "1:498941917981:web:d888d3b27b4ebd8e473ff4",
  measurementId: "G-R3ZVV31Y0R"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
