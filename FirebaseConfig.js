// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getReactNativePersistence} from '@firebase/auth/dist/rn/index.js'
import { initializeAuth } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY ,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
};

/* 
const firebaseConfig = {
  apiKey: "AIzaSyCrJN3rdJvPxJl0u3xiCgvw-0wao73LWVo",
  authDomain: "projeto-mobile-7ebc0.firebaseapp.com",
  projectId: "projeto-mobile-7ebc0",
  storageBucket: "projeto-mobile-7ebc0.firebasestorage.app",
  messagingSenderId: "17456492053",
  appId: "1:17456492053:web:8d117ae2733bdf9cac281c"
};  
*/

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app,
  {persistence: getReactNativePersistence(ReactNativeAsyncStorage)});
