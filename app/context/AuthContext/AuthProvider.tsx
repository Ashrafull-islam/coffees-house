'use client';
import React, { useState, ReactNode, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import AuthContext, { AuthContextType } from './AuthContext';
import app from '../../firebase/firebase.init'; // Firebase initialization


const auth = getAuth(app);
const provider=new GoogleAuthProvider();

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null); // Replace `any` with your actual user type if available
  const [loading, setLoading] = useState<boolean>(false);

  // Set up listener to check authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Function to create a new user
  const createUser = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setLoading(false);
        return result;
      })
      .catch((error) => {
        setLoading(false);
        throw error;
      });
  };

  // Function to sign in an existing user
  const signIn = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setLoading(false);
        return result;
      })
      .catch((error) => {
        setLoading(false);
        throw error;
      });
  };

  // Function to log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth)
      .then(() => {
        setUser(null);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        throw error;
      });
  };

const SigninWithPopup =  () => {
  setLoading(true);
    return signInWithPopup(auth, provider); // Returns Promise<UserCredential>
};
  return (
    <AuthContext.Provider value={{ user, loading, createUser, signIn, logOut,SigninWithPopup }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
