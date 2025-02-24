// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1JgElG4aebFU7Wm1LdQ04DszGfIA6VTc",
  authDomain: "to-do-list-8c298.firebaseapp.com",
  projectId: "to-do-list-8c298",
  storageBucket: "to-do-list-8c298.firebasestorage.app",
  messagingSenderId: "1079377647950",
  appId: "1:1079377647950:web:1da42e12200d4c24cd261f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);