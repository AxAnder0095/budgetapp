// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOWnBm10O9hLHHsbS_in_CwdrmxWixJyw",
    authDomain: "budget-app-with-firebase.firebaseapp.com",
    projectId: "budget-app-with-firebase",
    storageBucket: "budget-app-with-firebase.firebasestorage.app",
    messagingSenderId: "541732542600",
    appId: "1:541732542600:web:8103c536964a695f76273d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);