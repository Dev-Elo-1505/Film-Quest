// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcKGA6tqdXhILsTF3EGHREaXaGYXMj1nY",
  authDomain: "filmquest-6c2a9.firebaseapp.com",
  projectId: "filmquest-6c2a9",
  storageBucket: "filmquest-6c2a9.firebasestorage.app",
  messagingSenderId: "971589028813",
  appId: "1:971589028813:web:6e68ad2e81144edceb5284",
  measurementId: "G-YZXGNZ734Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);