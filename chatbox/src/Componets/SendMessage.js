import React, { useState } from 'react';
import {auth,db} from '../firebase';
import { addDoc,collection,serverTimestamp } from 'firebase/firestore';

const SendMessage = ({scroll}) => {
    const[message,setMessage] = useState("")

    const verifyMessage = async(e)=>{
    e.preventDefault();
    if(message.trim() === ''){
        alert("Enter valid message");
        return;
    }
    const {uid,displayName,photoURL} = auth.currentUser;
    //message is the collection name in firestore database. 
    //Created first before mentioned here
    await addDoc(collection(db, "messages"), {
        text: message,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid,
      });
      setMessage("");
      scroll.current.scrollIntoView({ behavior: "smooth" });
    };
  return (
   <form onSubmit={(e)=>verifyMessage(e)} className='send-message'>
    <label htmlFor='messageInput'hidden>Enter Message</label>
    <input
    id="messageInput"
    type='text'
    value={message}
    onChange={(e)=>setMessage(e.target.value)}
    className="form-input__input"/>
   <button type='submit'>Submit</button>
   </form>
  
  )
}

export default SendMessage