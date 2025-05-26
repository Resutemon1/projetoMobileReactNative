// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrJN3rdJvPxJl0u3xiCgvw-0wao73LWVo",
  authDomain: "projeto-mobile-7ebc0.firebaseapp.com",
  projectId: "projeto-mobile-7ebc0",
  storageBucket: "projeto-mobile-7ebc0.firebasestorage.app",
  messagingSenderId: "17456492053",
  appId: "1:17456492053:web:8d117ae2733bdf9cac281c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app);