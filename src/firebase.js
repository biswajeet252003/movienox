// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4IWi8F9K35TYMtMIxVnWRqTIH2sO5kOA",
  authDomain: "movieknox-25.firebaseapp.com",
  projectId: "movieknox-25",
  storageBucket: "movieknox-25.appspot.com",
  messagingSenderId: "584907725090",
  appId: "1:584907725090:web:4acf7661506d2fa29dad7b",
  databaseURL: "https://movieknox-25-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
export const db = getDatabase(app);

export const googleProvider = new GoogleAuthProvider();
export default app; 