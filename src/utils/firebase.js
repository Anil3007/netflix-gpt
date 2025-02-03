// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnOo2EJ67EONN90xYilLZyg0HARnNju58",
  authDomain: "neflixgpt-47def.firebaseapp.com",
  projectId: "neflixgpt-47def",
  storageBucket: "neflixgpt-47def.firebasestorage.app",
  messagingSenderId: "844069360851",
  appId: "1:844069360851:web:a053fa104c92f50411f026",
  measurementId: "G-TKH8GFY2LF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);