
import { initializeApp } from "firebase/app";
import { getAuth ,createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_ZxUPMF0nEZX0Gr3WDFeI0aGi--2Ce70",
  authDomain: "thedecorator-56f75.firebaseapp.com",
  projectId: "thedecorator-56f75",
  storageBucket: "thedecorator-56f75.appspot.com",
  messagingSenderId: "603049889144",
  appId: "1:603049889144:web:531d3fb2ee7c64fd8f0c8d",
  measurementId: "G-9DNK83WFZ8"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app,auth};