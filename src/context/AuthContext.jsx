"use client"

import { createContext, useState, useEffect } from "react"
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  updateProfile,
} from "firebase/auth"
import { auth, googleProvider, githubProvider } from "../firebaseConfig"

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
    return () => unsubscribe()
  }, [])

  // Login with email and password
  const login = (email, password) => signInWithEmailAndPassword(auth, email, password)

  // Register new user with email and password
  const register = (email, password, name, photoURL) =>
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user
      // Update user profile with name and photo
      return updateProfile(user, { displayName: name, photoURL }).then(() => {
        setCurrentUser({ ...user, displayName: name, photoURL })
      })
    })

  // Login with Google
  const loginWithGoogle = () =>
    signInWithPopup(auth, googleProvider).then((result) => {
      setCurrentUser(result.user)
    })

  // Login with GitHub
  const loginWithGitHub = () =>
    signInWithPopup(auth, githubProvider).then((result) => {
      setCurrentUser(result.user)
    })

  // Logout user
  const logout = () => signOut(auth)

  return (
    <AuthContext.Provider value={{ currentUser, login, register, loginWithGoogle, loginWithGitHub, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
