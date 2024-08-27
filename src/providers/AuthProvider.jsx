/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => { 
    const [user,setUser]= useState(null)
    // Create User Email and Password
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Sign Out
    const logOut = ()=>{
        return signOut(auth)
    }
    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log('User in the Auth state change',currentUser)
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe()
        }
    },[])
    const authInfo = {
        user,
        setUser,
        createUser,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;