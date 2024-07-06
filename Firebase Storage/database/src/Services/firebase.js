// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgSsJG-V_e6VNzURH8OV4Zo4R6wLmgBo4",
  authDomain: "databaseauth-bf8cf.firebaseapp.com",
  projectId: "databaseauth-bf8cf",
  storageBucket: "databaseauth-bf8cf.appspot.com",
  messagingSenderId: "917921718037",
  appId: "1:917921718037:web:b8b3a3f4f3e3ccc674931c",
  measurementId: "G-XGBH58NBH3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();


// firebase database
export const db = getFirestore(app);