import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase'
export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = (googleProvider) => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const facebookSignIn = (facebookProvider) =>{
        return signInWithPopup(auth,facebookProvider)
    }

    const logOut = () => {
        localStorage.removeItem('genius-token')
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            return unsubscribe();
        }
    }, [])

    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile)
    }
    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logOut,
        googleSignIn,
        updateUserProfile,
        facebookSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;