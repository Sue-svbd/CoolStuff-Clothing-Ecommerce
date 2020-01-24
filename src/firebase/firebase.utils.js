import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDcixv4uGzfFox6hCWvmRXaX-CLdxLzU_k",
  authDomain: "e-commerce-database.firebaseapp.com",
  databaseURL: "https://e-commerce-database.firebaseio.com",
  projectId: "e-commerce-database",
  storageBucket: "e-commerce-database.appspot.com",
  messagingSenderId: "239694124668",
  appId: "1:239694124668:web:803b470e7b897f81369bf9"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// setting up Google auth

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
