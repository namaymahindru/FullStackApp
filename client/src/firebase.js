// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-estate-339fe.firebaseapp.com",
  projectId: "mern-estate-339fe",
  storageBucket: "mern-estate-339fe.appspot.com",
  messagingSenderId: "449518927848",
  appId: "1:449518927848:web:389730f974664de6af2e5d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
