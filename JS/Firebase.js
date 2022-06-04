  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
  import { getAuth, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
  import { GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider  } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  const git = new GithubAuthProvider(app);
  const face = new FacebookAuthProvider(app);

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

  facebook.addEventListener('click', (e) => {

    signInWithPopup(auth, face)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
  
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
  
      window.location.href='Pages/home.html';
  
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
  
      // ...
    });

  })

  github.addEventListener('click', (e) => {

    signInWithPopup(auth, git)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;

    window.location.href='Pages/home.html';

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


