import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { collection, addDoc, setDoc } from "firebase/firestore";
import firebase from 'firebase/app'


// import {
// getFirestore,
//  query,
//  getDocs,
//  setDoc,
//  collection,
//  addDoc,
//  } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWLd-oVHm0C_ofgiA3dXkL2I4zAmpJhhY",
  authDomain: "contactus-3df5d.firebaseapp.com",
  projectId: "contactus-3df5d",
  storageBucket: "contactus-3df5d.appspot.com",
  messagingSenderId: "277354975242",
  appId: "1:277354975242:web:663690a9709ea2189a8ff3"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export  {
    db
};