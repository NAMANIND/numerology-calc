// lib/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAbUXZ-nmbfeQI8LhzFBm31kalq1kSC6Ho",
  authDomain: "ncalc-ae2b1.firebaseapp.com",
  projectId: "ncalc-ae2b1",
  storageBucket: "ncalc-ae2b1.appspot.com",
  messagingSenderId: "409896742473",
  appId: "1:409896742473:web:27206b761f99cf5d0f1998",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
