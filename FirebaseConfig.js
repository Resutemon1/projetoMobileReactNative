// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_aY4-LLUz87j_H6KSdgnrHjGhhYfdCek",
  authDomain: "projeto-mobile-49210.firebaseapp.com",
  projectId: "projeto-mobile-49210",
  storageBucket: "projeto-mobile-49210.firebasestorage.app",
  messagingSenderId: "851979144822",
  appId: "1:851979144822:web:bf5ac8448ac65886a9d957"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app);