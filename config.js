import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";




const firebaseConfig = {
    apiKey: "AIzaSyDjrR20rrCrnrWaUklT463ftU-trLwERjM",
    authDomain: "login-page-22f12.firebaseapp.com",
    projectId: "login-page-22f12",
    storageBucket: "login-page-22f12.appspot.com",
    messagingSenderId: "244992873846",
    appId: "1:244992873846:web:ad67d605513e91144d1657",
    measurementId: "G-KG4STMPSZJ"
  };

export const app = initializeApp(firebaseConfig);

console.log(app);
export const auth = getAuth(app);
console.log(auth);