/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBj0tqgcMA2B1iQ2gWeQLDBgCGgm4Kg2Gc",
  authDomain: "netflixgpt-2e1ab.firebaseapp.com",
  projectId: "netflixgpt-2e1ab",
  storageBucket: "netflixgpt-2e1ab.firebasestorage.app",
  messagingSenderId: "365854250064",
  appId: "1:365854250064:web:95c29a5aeafd0d12eded55",
  measurementId: "G-2MXBBKG0XL"
};

// Initialize Firebase  
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
export const auth = getAuth(app);