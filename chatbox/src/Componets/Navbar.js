import React from 'react'
import googleSignInButton from '../Images/googlebtn.png'
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth'
import { auth } from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import '../App.css'

const Navbar = () => {
    const[user] = useAuthState(auth)

    const handlegoogleSignIn = async() => {
        
            const googleAuthProvider = new GoogleAuthProvider();
            googleAuthProvider.setCustomParameters({ prompt: 'select_account' });
          
            signInWithPopup(auth, googleAuthProvider)
            .then(() =>console.log("User",user) )
            .catch(error => {
            
               console.log("Error",error)

              throw error;
            });
          
       
      };
      
      const signOut = () => {
     auth.signOut()
      };
  return (
   <div className='nav-bar'>
    {user?
    (
    <button onClick={signOut} className='sign-out' type='button'>
        SignOut
    </button>
    )
    :(
    <button className='sign-in'type='button'>
       <img 
       onClick={handlegoogleSignIn}
       src={googleSignInButton}
       alt="sign in with google"
       type="button"
      />
    </button>)
    }

   </div>
  )
}

export default Navbar