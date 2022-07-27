// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
import { getAuth, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import { GoogleAuthProvider, createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js"; 

const firebaseConfig = {
  apiKey: "AIzaSyCqC9-qaXhnwJB78VTymDor_40J_FLsfxs",
  authDomain: "login-c9fae.firebaseapp.com",
  projectId: "login-c9fae",
  storageBucket: "login-c9fae.appspot.com",
  messagingSenderId: "750900930912",
  appId: "1:750900930912:web:83266910712afa95539605",
  measurementId: "G-TESDJGV7ZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const goo = new GoogleAuthProvider(app);

google.addEventListener('click', (e) => {

  signInWithPopup(auth, goo)
.then((result) => {
  // This gives you a Google Access Token. You can use it to access the Google API.
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
  // The signed-in user info.
  const user = result.user;

  window.location.href='home.html';

}).catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  // The email of the user's account used.
  const email = error.email;
  // The AuthCredential type that was used.
  const credential = GoogleAuthProvider.credentialFromError(error);
  // ...
});

})

sign.addEventListener('click', (e) =>{

  e.preventDefault()

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if(name.trim() === '' || email.trim() === '' || password.trim() === ''){
    alert('Preencha todos os campos')
    return
  }

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
    window.location.href='home.html';

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

})



