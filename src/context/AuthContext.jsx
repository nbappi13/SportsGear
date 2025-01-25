

import React, { createContext, useState, useEffect } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, signInWithPopup, updateProfile } from 'firebase/auth';
import { auth, googleProvider, githubProvider } from '../firebaseConfig';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
  
  const register = (email, password, name, photoURL) => createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return updateProfile(user, { displayName: name, photoURL });
    });

  const loginWithGoogle = () => signInWithPopup(auth, googleProvider);
  const loginWithGitHub = () => signInWithPopup(auth, githubProvider);
  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ currentUser, login, register, loginWithGoogle, loginWithGitHub, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
