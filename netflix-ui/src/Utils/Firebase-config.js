import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjQPawd1M7J64pXbRGpJiPJAK0ya2qlaE",
  authDomain: "react-netflix-clone-83597.firebaseapp.com",
  projectId: "react-netflix-clone-83597",
  storageBucket: "react-netflix-clone-83597.appspot.com",
  messagingSenderId: "510686080521",
  appId: "1:510686080521:web:5c0d540bf93954cefd12d8",
  measurementId: "G-4HG4WLEG7F"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);