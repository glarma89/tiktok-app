//import firebase from 'firebase/compat/app'; // comment 19.04.23
import { initializeApp } from "firebase/app"; // uncomment 19.04.23
//import 'firebase/storage';
//import 'firebase/compat/storage'; // comment 19.04.23
//import 'firebase/firestore';
//import 'firebase/compat/firestore'; // comment 19.04.23
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJODQi4aHBrjPr56x3HQ5wCg5sca_JbKY",
    authDomain: "ninja-firegram-3f348.firebaseapp.com",
    projectId: "ninja-firegram-3f348",
    storageBucket: "ninja-firegram-3f348.appspot.com",
    messagingSenderId: "880878962145",
    appId: "1:880878962145:web:3ac0b24d2ada9530fa7ea0"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig); // uncomment 19.04.23
  //firebase.initializeApp(firebaseConfig); // comment 19.04.23

  export const auth = getAuth(app)

  // const projectStorage = firebase.storage(); // comment 19.04.23
  // const projectFirestore = firebase.firestore(); // comment 19.04.23
  // const timestamp = firebase.firestore.FieldValue.serverTimestamp; // comment 19.04.23

  // export { projectStorage, projectFirestore, timestamp } // comment 19.04.23