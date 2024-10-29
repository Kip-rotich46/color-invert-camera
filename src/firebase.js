// src/firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCgbnrmbBG--8wLuFAodUMZizPwO2dU30",
  authDomain: "artshow-dca94.firebaseapp.com",
  projectId: "artshow-dca94",
  storageBucket: "artshow-dca94.appspot.com",
  messagingSenderId: "42126191097",
  appId: "1:42126191097:web:4e73a96609107a9940b528",
  measurementId: "G-0G2YX3JSV5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(app);

// Export the storage for use in other parts of the app
export { storage };
