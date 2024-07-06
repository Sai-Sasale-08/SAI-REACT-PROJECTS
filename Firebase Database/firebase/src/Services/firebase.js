// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxL37Ra4KFkGtgciiH98SXR-6o0kQt2YI",
  authDomain: "auth-b0cc6.firebaseapp.com",
  projectId: "auth-b0cc6",
  storageBucket: "auth-b0cc6.appspot.com",
  messagingSenderId: "622943222066",
  appId: "1:622943222066:web:f61270739e80f93e45ff2b",
  measurementId: "G-N84KVPDREH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()