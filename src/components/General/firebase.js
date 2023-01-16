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
  apiKey: "AIzaSyATdnKOGZaaTViW3EdN3gwkQyqANGs4xb0",
  authDomain: "gilbert2-329ad.firebaseapp.com",
  projectId: "gilbert2-329ad",
  storageBucket: "gilbert2-329ad.appspot.com",
  messagingSenderId: "14716882201",
  appId: "1:14716882201:web:a4131d6b01038f6fab4988",
  measurementId: "G-1075B2QKJF"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
