import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "../firebase.init";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (curUser) => {
            setUser(curUser)
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])

    const signup = async (email, password, name, photoUrl) => {
        const userCred = await createUserWithEmailAndPassword(auth, email, password)
        await updateProfile(userCred.user, {
            displayName: name,
            photoURL: photoUrl
        })
        // console.log('Authenticated User:', auth.currentUser);
        return userCred
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email,password)
    }

    const logout = () => {
        return signOut(auth)
    }

    const contextValue = {
        user,
        loading,
        signup,
        login,
        logout,
        isAuthenticated: !!user
    }
    return (
        <AuthContext value={contextValue}>
            {loading ? 'Loading' : children}
        </AuthContext>
    );
};