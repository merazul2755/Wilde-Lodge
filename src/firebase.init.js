// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBGvE9OFCBs94jKNIjG2Uf9I5TtMVFTvs",
  authDomain: "wilde-lodge.firebaseapp.com",
  projectId: "wilde-lodge",
  storageBucket: "wilde-lodge.appspot.com",
  messagingSenderId: "981105135235",
  appId: "1:981105135235:web:d78915507ed405115b15b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;