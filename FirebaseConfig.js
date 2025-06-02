// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import{getReactNativePersistence} from '@firebase/auth/dist/rn/index.js'
import { initializeAuth } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXlBjGxBqqV6X7jYNbkOTHwu6yHJ60I5I",
  authDomain: "appfinancas-cc674.firebaseapp.com",
  projectId: "appfinancas-cc674",
  storageBucket: "appfinancas-cc674.firebasestorage.app",
  messagingSenderId: "997422524157",
  appId: "1:997422524157:web:2e6f06fa4dbddc86a7c094"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app,
  {persistence: getReactNativePersistence(ReactNativeAsyncStorage)});
export const db = getFirestore(app);