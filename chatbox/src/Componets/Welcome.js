import React from "react";
import logo from '../logo.svg';
import GoogleSignin from "../Images/googlebtn.png";
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
const Welcome = () => {
  const googleSignIn = () => {
    
    const googleAuthProvider = new GoogleAuthProvider();
    googleAuthProvider.setCustomParameters({ prompt: 'select_account' });
  
    signInWithPopup(auth, googleAuthProvider)
  };

  return (
    <main className="welcome">
      <h2>Welcome to React Chat.</h2>
      <img src={logo} className="App-logo" alt="logo" />
      <p>Sign in with Google to chat with with your fellow React Developers.</p>
      <button className="Welcomesignin">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
          
        />
      </button>
    </main>
  );
};
export default Welcome;