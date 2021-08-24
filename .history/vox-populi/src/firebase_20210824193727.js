import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyD8vU_920ccpG23iqy6oP_OGk8daUbb1bA",
    authDomain: "vox-populi-5998e.firebaseapp.com",
    projectId: "vox-populi-5998e",
    storageBucket: "vox-populi-5998e.appspot.com",
    messagingSenderId: "886971705892",
    appId: "1:886971705892:web:2e6c48c0b73bdd31ab46b1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default {
    firebase: firebase,
    


  }