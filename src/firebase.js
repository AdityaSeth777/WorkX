import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBma0kK4TISFXYc0avCYKDyw3ySkoo5Lhk",
    authDomain: "workx-d08ed.firebaseapp.com",
    projectId: "workx-d08ed",
    storageBucket: "workx-d08ed.appspot.com",
    messagingSenderId: "286389933008",
    appId: "1:286389933008:web:16295dfa38731e13689fd5",
    measurementId: "G-DWFWD2M3B5"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();  // Correctly export the auth instance
export default app;  // Correctly export the firebase app instance