// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI8RCVKFI88L8xIup1UzkTsAJe7Hz-Hlc",
  authDomain: "dettoreact.firebaseapp.com",
  projectId: "dettoreact",
  storageBucket: "dettoreact.appspot.com",
  messagingSenderId: "600977215716",
  appId: "1:600977215716:web:4d0a35369c3e4ddcff5cf1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);