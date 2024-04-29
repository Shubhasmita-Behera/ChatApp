// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyD3YwBx9c5EjsRA1G1KoOTViJKa4Ti1FRo",
    authDomain: "react-chat-665a8.firebaseapp.com",
    projectId: "react-chat-665a8",
    storageBucket: "react-chat-665a8.appspot.com",
    messagingSenderId: "1000222715132",
    appId: "1:1000222715132:web:d01a8b05a041aa73a03b79",
    measurementId: "G-JTSBN3X9X9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);