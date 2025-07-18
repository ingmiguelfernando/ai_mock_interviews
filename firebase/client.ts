// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEgeg2YXn-WMn5nUZAN7pC7nwzyiBAcdA",
  authDomain: "prepwise-6638f.firebaseapp.com",
  projectId: "prepwise-6638f",
  storageBucket: "prepwise-6638f.firebasestorage.app",
  messagingSenderId: "485450283238",
  appId: "1:485450283238:web:8a7ae0cbb33ec644a32327",
  measurementId: "G-6FLMTC50D0"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
