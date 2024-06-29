import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAd4-eG27lWcl-SewmTT84Sv9T0pTxpA40",
  authDomain: "assignment1-7402e.firebaseapp.com",
  projectId: "assignment1-7402e",
  storageBucket: "assignment1-7402e.appspot.com",
  messagingSenderId: "148557999783",
  appId: "1:148557999783:web:313c4c08855d8a67c03582",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
