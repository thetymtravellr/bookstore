// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAASXtalJ7dhJt1QSFhhKm-7Nu7RoiTcv4",
  authDomain: "book1store.firebaseapp.com",
  projectId: "book1store",
  storageBucket: "book1store.appspot.com",
  messagingSenderId: "439143042177",
  appId: "1:439143042177:web:9e67a4df0125fbeab5d180"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth