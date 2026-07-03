import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "disco-insomnio.firebaseapp.com",
  projectId: "disco-insomnio",
  storageBucket: "disco-insomnio.firebasestorage.app",
  messagingSenderId: "329678324326",
  appId: "1:329678324326:web:bc9d4363e78042079023a7",
  measurementId: "G-1X273JTD0R"
 
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);// Import the functions you need from the SDKs you need
