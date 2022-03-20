import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyAMkhaKBOQeAxiIbiI0vCYY3PFeYJXKiA4",
    authDomain: "vox-populi-extend.firebaseapp.com",
    projectId: "vox-populi-extend",
    storageBucket: "vox-populi-extend.appspot.com",
    messagingSenderId: "768390973095",
    appId: "1:768390973095:web:aeaa88ad2225b0a8dc3d82"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let db = firebase.firestore();
  let storage = firebase.storage();


  export {firebase, db, storage};
