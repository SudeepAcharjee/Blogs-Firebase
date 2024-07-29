// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyCtlINREAlJH34DAIbGFc0pgNS1vL3svTE",

  authDomain: "blog-f4cda.firebaseapp.com",

  projectId: "blog-f4cda",

  storageBucket: "blog-f4cda.appspot.com",

  messagingSenderId: "605232530796",

  appId: "1:605232530796:web:a7cbb3853907ca6d13df49",

  measurementId: "G-8YFZV1BQGF"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage  = getStorage(app);

export {fireDb, auth, storage}