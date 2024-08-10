import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, provider } from './firebase';
import { firestore } from './firebase'; // assuming firestore is set up

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                const userDoc = await firestore.collection('users').doc(user.uid).get();
                const userType = userDoc.data().userType;
                setCurrentUser({ ...user, userType });
            } else {
                setCurrentUser(null);
            }
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const signInWithGoogle = () => {
        return auth.signInWithPopup(provider);
    };

    const signOut = () => {
        return auth.signOut();
    };

    const value = {
        currentUser,
        signInWithGoogle,
        signOut,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
