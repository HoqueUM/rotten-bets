// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQu9Qkp8N2Fm5dEhb38s2M6qrlx1O317U",
  authDomain: "rotten-bets.firebaseapp.com",
  projectId: "rotten-bets",
  storageBucket: "rotten-bets.appspot.com",
  messagingSenderId: "320948871706",
  appId: "1:320948871706:web:430d00acedf2c64266e7a3",
  measurementId: "G-46SFEPJW6Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);