// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,

  // apiKey: "AIzaSyBWrLxutdOtLCoIi0fz6A3k996LWujgFwE",
  // authDomain: "solosphere-3e73a.firebaseapp.com",
  // projectId: "solosphere-3e73a",
  // storageBucket: "solosphere-3e73a.appspot.com",
  // messagingSenderId: "811645690392",
  // appId: "1:811645690392:web:1528a04dbc61866dc9596d"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
