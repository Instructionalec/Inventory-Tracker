// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKwb8FvNhwJ6Jz683ZDLRcuFajhS7W5j4",
  authDomain: "inventory-management-4feaa.firebaseapp.com",
  projectId: "inventory-management-4feaa",
  storageBucket: "inventory-management-4feaa.appspot.com",
  messagingSenderId: "999734396362",
  appId: "1:999734396362:web:3463b87b26de8f61397b33",
  measurementId: "G-PBW4WT4YB2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore} 