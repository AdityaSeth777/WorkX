import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, provider, db } from './firebase'; // Import db from firebase

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
                const userDoc = await db.collection('users').doc(user.uid).get();
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
