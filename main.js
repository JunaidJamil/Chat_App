
// import {auth, db ,storage} from "./firebase.mjs" 
// import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"
// import {addDoc,collection,getDocs } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js"
// import {ref, uploadBytes} from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-storage.js';

// let butn = document.getElementById('btn')
// butn.addEventListener('click',()=>{
//   let email= document.getElementById('email').value
//   let password = document.getElementById('password').value
//   let name = document.getElementById('name').value;
//   let fname = document.getElementById('fname').value;
//   let numb = document.getElementById('num').value;
//   let file = document.getElementById('file').files;
//   createUserWithEmailAndPassword(auth, email, password)
  
//   .then(async(userCredential) => {
    
//     try {
//       const docRef = await addDoc(collection(db, "post"), {
//         name : name,
//         fathername : fname,
//         number : numb,
//         email : email,
//         pass : password,
//       });
//       console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
    
   
//     const storageRef = ref(storage, email);
    
//     // 'file' comes from the Blob or File API
//     uploadBytes(storageRef, file).then((snapshot) => {

//    file

//       console.log('Uploaded a blob or file!');
//     });
//     alert('done')
// // window.location.href = "/login.html"
// console.log('user', user)
// })
// .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log('errorCode', errorCode)
//     console.log('errorMessage', errorMessage)
// });
// })

// const querySnapshot = await getDocs(collection(db,"post"))
// let post = document.getElementById('post')
// querySnapshot.forEach((doc) => {
//   post.innerHTML += `<h1>${doc.data().name}</h1><p>${doc.data().fathername}</p> `;
// });

// your-script.js

import { auth, db, storage } from "./firebase.mjs";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
import { ref, uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-storage.js';

let butn = document.getElementById('btn')
butn.addEventListener('click', () => {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let name = document.getElementById('name').value;
  let fname = document.getElementById('fname').value;
  let numb = document.getElementById('num').value;
  let file = document.getElementById('file').files[0]; // get the first selected file

  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      try {
        const docRef = await addDoc(collection(db, "post"), {
          name: name,
          fathername: fname,
          number: numb,
          email: email,
          pass: password,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      const storageRef = ref(storage, email + "/" + file.name);

      // 'file' comes from the Blob or File API
      uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');

        // Get the download URL for the file
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          // Save the download URL to Firestore
          // Assuming you have the 'user' object from userCredential.user
          db.collection("users").doc(userCredential.user.uid).set({
            downloadURL: downloadURL,
          }, { merge: true })
          .then(() => {
            console.log("Download URL saved in Firestore!");
          })
          .catch((error) => {
            console.error("Error saving download URL: ", error);
          });
        });
      });

      alert('done');
      window.location.href = "/login.html"
      console.log('user', userCredential.user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('errorCode', errorCode)
      console.log('errorMessage', errorMessage)
    });
});
