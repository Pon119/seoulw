// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyC3_25Wo6DH1o2MxkOtnNwvp33fEXdP9aw",
  authDomain: "seoul-w.firebaseapp.com",
  projectId: "seoul-w",
  storageBucket: "seoul-w.appspot.com",
  messagingSenderId: "223380888172",
  appId: "1:223380888172:web:723e9f992079c79ff9d649",
  measurementId: "G-BJP5RRKRZJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
