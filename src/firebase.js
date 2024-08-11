// src/firebase.js

import { initializeApp } from 'firebase/compat/app';
import { getAuth, GoogleAuthProvider } from 'firebase/compat/auth';
import { getFirestore } from 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBma0kK4TISFXYc0avCYKDyw3ySkoo5Lhk",
    authDomain: "workx-d08ed.firebaseapp.com",
    projectId: "workx-d08ed",
    storageBucket: "workx-d08ed.appspot.com",
    messagingSenderId: "286389933008",
    appId: "1:286389933008:web:16295dfa38731e13689fd5",
    measurementId: "G-DWFWD2M3B5"
};


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp); // Initialize Firestore
const auth = getAuth(firebaseApp); // Initialize Auth
const provider = new GoogleAuthProvider(); // Google Auth Provider

export { db, auth, provider }; // Export db, auth, and provider