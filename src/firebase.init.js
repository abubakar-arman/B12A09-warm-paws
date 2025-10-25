// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeIU5inAKySnFXiT0nyOyqQ3LuVIjb8QE",
  authDomain: "warm-paws-b2404.firebaseapp.com",
  projectId: "warm-paws-b2404",
  storageBucket: "warm-paws-b2404.firebasestorage.app",
  messagingSenderId: "265584786099",
  appId: "1:265584786099:web:f91794ef399dce409a4ec6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)

export default auth;