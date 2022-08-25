// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkHf3nZnoQRD1i-0GCsrlDxPhJ9aw4KVU",
  authDomain: "nimbus-358403.firebaseapp.com",
  projectId: "nimbus-358403",
  storageBucket: "nimbus-358403.appspot.com",
  messagingSenderId: "812225798002",
  appId: "1:812225798002:web:5b2ab8e171c762cdbc07eb",
  measurementId: "G-FCV3YEW2CR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);