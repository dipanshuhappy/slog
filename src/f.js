import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt9IVgDkE8cg0ndGXSqor2x_MnQSeU7qU",
  authDomain: "delete-me-6e1ce.firebaseapp.com",
  projectId: "delete-me-6e1ce",
  storageBucket: "delete-me-6e1ce.appspot.com",
  messagingSenderId: "920244060684",
  appId: "1:920244060684:web:bf2ba90660617f03ef6429",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
