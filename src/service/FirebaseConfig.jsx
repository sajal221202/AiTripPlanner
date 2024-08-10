/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDczXGZTLJKdwtbOwCqmXiTrVmhmcvxaQ8",
  authDomain: "ai-trip-planner-ed5cd.firebaseapp.com",
  projectId: "ai-trip-planner-ed5cd",
  storageBucket: "ai-trip-planner-ed5cd.appspot.com",
  messagingSenderId: "759866183927",
  appId: "1:759866183927:web:ebe60cd04ebab5192d83f2",
  measurementId: "G-FQNZH1VT12"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
// const analytics = getAnalytics(app);