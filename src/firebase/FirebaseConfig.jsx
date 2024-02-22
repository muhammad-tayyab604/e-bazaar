import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIhaIsY6DdiJBjGAAgQon64L0DJy8ggy8",
  authDomain: "ecommerce-f1925.firebaseapp.com",
  projectId: "ecommerce-f1925",
  storageBucket: "ecommerce-f1925.appspot.com",
  messagingSenderId: "423697609029",
  appId: "1:423697609029:web:c1fb2be14313f52fa74e2c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
