// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8MBOAzDXjTtSPe9WU0idJNxQmddMK8Es",
  authDomain: "hostel-ce98f.firebaseapp.com",
  projectId: "hostel-ce98f",
  storageBucket: "hostel-ce98f.appspot.com",
  messagingSenderId: "850388891171",
  appId: "1:850388891171:web:aff23bb912cc45a17b6396",
  measurementId: "G-8T49T1ZNE8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);