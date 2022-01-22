// import libraries
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";


// reference firebase backend
const firebaseConfig = {
    apiKey: "AIzaSyDrJUQmrBdY6BTddvfsfPSsAJ_iRMHudTs",
    authDomain: "form-2e163.firebaseapp.com",
    projectId: "form-2e163",
    storageBucket: "form-2e163.appspot.com",
    messagingSenderId: "473742840237",
    appId: "1:473742840237:web:b88545526ec1bf44bb1124"
  };
//   initilize application and retrieve authentication
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

//   obtained from firebase tutorial
createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  const user = userCredential.user;
}).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => { 
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
    } else {
    }
  });
//   attempted code
// function to sign up
firebase.initalizeApp(firebaseConfig);
  
  const auth = firebase.auth();
  function signUp(){
      var email = document.getElementById("email");
      var password = document.getElementById("password");

      const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
      promise.catch(e => alert(e.message));

      alert("Signed Up");
  }
//   function to signIn
  function signIn(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.SignInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed In" + email);
}
// function to sign out
function signOut(){
    auth.signOut();
    alert("Sign Out");
}
// function to alert user of what email they are using
auth.onAuthStateChanged(function(user){
    if(user){
        var email = user.email
        alert("Active User" + email);
    }else{
        alert("Wrong User");
        
    }
});
// proof of concept
function showAlert() {
    alert ("Proof of concept");
  }
