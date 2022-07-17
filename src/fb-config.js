// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3DySS7qwrIp8CQrj-Sdz6Alfidh8FeSo",
  authDomain: "blogapp-bbdb2.firebaseapp.com",
  projectId: "blogapp-bbdb2",
  storageBucket: "blogapp-bbdb2.appspot.com",
  messagingSenderId: "419021205456",
  appId: "1:419021205456:web:4f51e9457d632b8e8d13d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth (app);
export const provider =  new GoogleAuthProvider()