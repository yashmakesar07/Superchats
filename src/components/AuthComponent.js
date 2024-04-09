// src/AuthComponent.js
import React, { useState, useEffect } from 'react';
import './componentStyle/AuthComponent.css'

import HomePage from './HomePage';

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCFLtwffDa2W9U6STf5-OiuJRD3EaJmFwE",
  authDomain: "superchat-3f948.firebaseapp.com",      
  projectId: "superchat-3f948",
  storageBucket: "superchat-3f948.appspot.com",
  messagingSenderId: "814767024606",
  appId: "1:814767024606:web:80a03a0e568eae8b81954f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const AuthComponent=() => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleGoogleSignIn = async () => {
    console.log("Feteched")
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('Google Sign-in successful', result.user);
    } catch (error) {
    //   setError(error.message);
      console.log('Google Sign-in error:', error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('Sign-out successful');
    } catch (error) {
    //   setError(error.message);
      console.log('Sign-out error:', error.message);
    }
  };

  return (
    <div className="container">
      {user ? (
        <HomePage/>
      ) : (
        <>
          <h1>Sign In with Google</h1><br/>
          <button onClick={handleGoogleSignIn}>Sign In with Google</button>
        </>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default AuthComponent;
