import { initializeApp } from "firebase/app";
//import { getDatabase } from "firebase/database";
//import { getDatabase, ref, onValue} from "firebase/database";
import firebase from "firebase/app";
import "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADKCLpyrvLmQv2kdcuJXm6o9L9wNXg5zc",
  authDomain: "maze-solver-website.firebaseapp.com",
  databaseURL: "https://maze-solver-website-default-rtdb.firebaseio.com",
  projectId: "maze-solver-website",
  storageBucket: "maze-solver-website.appspot.com",
  messagingSenderId: "270216559839",
  appId: "1:270216559839:web:dc64217a0bdb58609cfd6a",
  measurementId: "G-KKHEZEW3SZ"
};

firebase.initializeApp(firebaseConfig);

var starCountRef = firebase.database().ref('i');
starCountRef.on('value', (snapshot) => {
  const data = snapshot.val();
  console.log(data);
  //updateStarCount(postElement, data);
});


// const i = ref(db, '/');
// onValue(i, (snapshot) => {
//   const data = snapshot.val();
//   console.log("hi");
// });

// const j = ref(db, 'j/');
// onValue(j, (snapshot) => {
//   const data = snapshot.val();
//   console.log(data);
// });