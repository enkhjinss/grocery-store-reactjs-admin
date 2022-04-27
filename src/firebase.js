import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBJ-MWCvXWwczJrHIRc8TaHayCrYahCjMI",
    authDomain: "grocery-store-admin-reactjs.firebaseapp.com",
    projectId: "grocery-store-admin-reactjs",
    storageBucket: "grocery-store-admin-reactjs.appspot.com",
    messagingSenderId: "1030522580653",
    appId: "1:1030522580653:web:9902aa185b8395c56ea024",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export const db = getFirestore(app);
export default auth;
