// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDRhCrEwD3olThWUfhqJSpmwROOMRtkP4",
    authDomain: "manufacturer-client-website.firebaseapp.com",
    projectId: "manufacturer-client-website",
    storageBucket: "manufacturer-client-website.appspot.com",
    messagingSenderId: "983078597022",
    appId: "1:983078597022:web:6b6b7eaf917b261c66e68f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;