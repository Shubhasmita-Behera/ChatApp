import React,{useEffect,useState,useRef} from 'react';
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
  QuerySnapshot
} from "firebase/firestore";
import { db } from '../firebase';
import SendMessage from './SendMessage';
import Message from './Message';

const ChatBox = () => {
const[Chatboxmessages,setChatBoxMessage] = useState([]);
const scroll = useRef();
  useEffect(()=>{
    const q = query(
      collection(db,"messages"),
      orderBy("createdAt","desc"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q,(QuerySnapshot)=>{
      const fetchedMessages = [];
      QuerySnapshot.forEach((doc)=>{
        fetchedMessages.push({...doc.data(),id:doc.id})
      });
      const  sortedMessages = fetchedMessages.sort(
        (a,b) => a.createdAt - b.createdAt
      );
      setChatBoxMessage(sortedMessages)
    });
    return()=> unsubscribe;

  },[])
  return (
    <main className="chat-box">
    <div className="messages-wrapper">
      {Chatboxmessages?.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
    {/* when a new message enters the chat, the screen scrolls down to the scroll div */}
    <span ref={scroll}></span>
    <SendMessage scroll={scroll} />
  </main>
  )
}

export default ChatBox