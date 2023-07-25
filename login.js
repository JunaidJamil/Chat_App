import {auth} from "./firebase.mjs" 
import {signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"

 let bts = document.getElementById('btn2');
 bts.addEventListener('click',()=>{
let email2 = document.getElementById('email2').value;
let password2 = document.getElementById('password2').value;


  
signInWithEmailAndPassword(auth, email2, password2)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    alert('Logged in')
    window.location.href = "/home.html"





       
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('errorCode', errorCode)
    console.log('errorMessage', errorMessage)
  });
})