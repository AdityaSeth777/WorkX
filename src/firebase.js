// src/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBma0kK4TISFXYc0avCYKDyw3ySkoo5Lhk",
    authDomain: "workx-d08ed.firebaseapp.com",
    projectId: "workx-d08ed",
    storageBucket: "workx-d08ed.appspot.com",
    messagingSenderId: "286389933008",
    appId: "1:286389933008:web:16295dfa38731e13689fd5",
    measurementId: "G-DWFWD2M3B5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();