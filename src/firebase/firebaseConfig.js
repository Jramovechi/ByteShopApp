//Import FIREBASE
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdZJr89ypJ-PW14qqnv1g6iYHugVH9b98",
  authDomain: "byteshopapp.firebaseapp.com",
  projectId: "byteshopapp",
  storageBucket: "byteshopapp.appspot.com",
  messagingSenderId: "1067404030922",
  appId: "1:1067404030922:web:0930be0f579677c9b1d533",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
