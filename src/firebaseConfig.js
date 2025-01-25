

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdGc3jZqISkXmcJhJR0U-KERXAb0swTX0",
  authDomain: "b10-a10-task.firebaseapp.com",
  projectId: "b10-a10-task",
  storageBucket: "b10-a10-task.firebasestorage.app",
  messagingSenderId: "526407982825",
  appId: "1:526407982825:web:7e0e3ec0dea87de8075a78"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, githubProvider };
