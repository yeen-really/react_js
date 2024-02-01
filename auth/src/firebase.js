// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA4VjXxWrqJTbLyiGStnMxES_pvPQlLcc",
  authDomain: "auth-dev-c45da.firebaseapp.com",
  projectId: "auth-dev-c45da",
  storageBucket: "auth-dev-c45da.appspot.com",
  messagingSenderId: "419689364170",
  appId: "1:419689364170:web:012a58303dc3956c171233",
  measurementId: "G-E2E6TCN5V4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);