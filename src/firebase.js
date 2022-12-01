// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPb4rr0D7b0c-_88jShMqEw3NCwYKe1yo",
  authDomain: "projetnetflix-87ec9.firebaseapp.com",
  projectId: "projetnetflix-87ec9",
  storageBucket: "projetnetflix-87ec9.appspot.com",
  messagingSenderId: "964155102159",
  appId: "1:964155102159:web:acae741f9f6834e60138ba"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);