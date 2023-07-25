import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import {getFirestore} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js" 
import { getStorage} from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-storage.js';

const firebaseConfig = {
  
    apiKey: "AIzaSyAl1ia2SCONrzCwaMru9pTYT_MkuYw6t08",
    authDomain: "signup-dd96b.firebaseapp.com",
    projectId: "signup-dd96b",
    storageBucket: "signup-dd96b.appspot.com",
    messagingSenderId: "77269160744",
    appId: "1:77269160744:web:3a0aff55d4d82fcd7bb61d",
    measurementId: "G-V05ZWRJ28Z"


};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
