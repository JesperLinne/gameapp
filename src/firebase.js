// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgRQnXG0uYfMUevQuAUGmlqvLJBacPms0",
  authDomain: "gameduel-7bbd0.firebaseapp.com",
  projectId: "gameduel-7bbd0",
  storageBucket: "gameduel-7bbd0.appspot.com",
  messagingSenderId: "663040438898",
  appId: "1:663040438898:web:82472254024f96815708eb",
  measurementId: "G-CQ2YGZDNGZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)
export default app