// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcszWxmFWEk72BiiilArXEYcBNykVuz5s",
  authDomain: "dragon-news-e2420.firebaseapp.com",
  projectId: "dragon-news-e2420",
  storageBucket: "dragon-news-e2420.appspot.com",
  messagingSenderId: "398226534246",
  appId: "1:398226534246:web:b8578b1de00635b5cb62a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;