// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8X0JOGFrDfBa0Zv-H3oOR16mm9VIgdXM",
  authDomain: "uno-tag.firebaseapp.com",
  projectId: "uno-tag",
  storageBucket: "uno-tag.appspot.com",
  messagingSenderId: "921246285229",
  appId: "1:921246285229:web:c483fe50720710f0193524",
  measurementId: "G-J0JQYG7LBG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
