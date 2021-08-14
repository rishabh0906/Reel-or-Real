import firebase from "firebase/app";

import "firebase/firestore";

import "firebase/auth";

import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAYGyu1rKHaADqEIDkNZo2g89KSV02xmAU",
  authDomain: "anonymous-d2e02.firebaseapp.com",
  projectId: "anonymous-d2e02",
  storageBucket: "anonymous-d2e02.appspot.com",
  messagingSenderId: "47582678001",
  appId: "1:47582678001:web:cc995d085a4c6f5d0cd250",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

let provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
