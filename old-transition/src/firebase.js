// src/firebase.js

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBma0kK4TISFXYc0avCYKDyw3ySkoo5Lhk",
    authDomain: "workx-d08ed.firebaseapp.com",
    projectId: "workx-d08ed",
    storageBucket: "workx-d08ed.appspot.com",
    messagingSenderId: "286389933008",
    appId: "1:286389933008:web:16295dfa38731e13689fd5",
    measurementId: "G-DWFWD2M3B5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); // Initialize Firestore
const auth = firebase.auth(); // Initialize Auth
const provider = new firebase.auth.GoogleAuthProvider(); // Google Auth Provider

export { db, auth, provider }; // Export db, auth, and provider
