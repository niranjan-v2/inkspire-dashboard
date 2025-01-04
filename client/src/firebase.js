// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "inkspire-dashboard.firebaseapp.com",
  projectId: "inkspire-dashboard",
  storageBucket: "inkspire-dashboard.firebasestorage.app",
  messagingSenderId: "1017526241921",
  appId: "1:1017526241921:web:d584a6d8c9ebd0626f5b80",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
