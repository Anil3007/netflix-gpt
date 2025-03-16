import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnOo2EJ67EONN90xYilLZyg0HARnNju58",
  authDomain: "neflixgpt-47def.firebaseapp.com",
  projectId: "neflixgpt-47def",
  storageBucket: "neflixgpt-47def.firebasestorage.app",
  messagingSenderId: "844069360851",
  appId: "1:844069360851:web:a053fa104c92f50411f026",
  measurementId: "G-TKH8GFY2LF"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();