// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-65171.firebaseapp.com",
  projectId: "mern-estate-65171",
  storageBucket: "mern-estate-65171.appspot.com",
  messagingSenderId: "530137637865",
  appId: "1:530137637865:web:d9eb0cf59304300e04e178"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);