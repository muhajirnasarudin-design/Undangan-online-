
import { initializeApp } from
"https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from
"https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
  serverTimestamp
} from
"https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyB2QZLpk8eELmb3RdABQPlrayvLV0vqKcA",
  authDomain: "undangan-pro-a2f24.firebaseapp.com",
  databaseURL: "https://undangan-pro-a2f24-default-rtdb.firebaseio.com",
  projectId: "undangan-pro-a2f24",
  storageBucket: "undangan-pro-a2f24.firebasestorage.app",
  messagingSenderId: "509535840012",
  appId: "1:509535840012:web:466bf22068943d75258b29",
  measurementId: "G-GXGZHJVB22"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);


export {
  auth,
  db,

  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,

  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
  serverTimestamp
};
