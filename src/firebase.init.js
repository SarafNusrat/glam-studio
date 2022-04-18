// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9_9EpvU-lnDMHv9XP0TLB9ALWeD3mm0M",
  authDomain: "glam-studio-54d2e.firebaseapp.com",
  projectId: "glam-studio-54d2e",
  storageBucket: "glam-studio-54d2e.appspot.com",
  messagingSenderId: "896499717339",
  appId: "1:896499717339:web:f8e4a4da832fd1523868fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth; 