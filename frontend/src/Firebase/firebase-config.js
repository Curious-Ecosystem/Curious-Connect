// Import the functions you need from the SDKs you need
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM3zqvyOeyXMOCDMfXWtl1yH7g6wdadh0",
  authDomain: "awesome-griffin-421204.firebaseapp.com",
  projectId: "awesome-griffin-421204",
  storageBucket: "awesome-griffin-421204.appspot.com",
  messagingSenderId: "133501638693",
  appId: "1:133501638693:web:a452989f29cbfab903c7cc",
  measurementId: "G-V7GPV4FVR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
