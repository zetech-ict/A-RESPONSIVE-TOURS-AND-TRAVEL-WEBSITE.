// https://facebook-2-6eb19.firebaseapp.com/__/auth/handler

import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC79UzUbmNDFysnIdQ9ZVVQrQRp3E6pYRg",
  authDomain: "afrisafari.firebaseapp.com",
  projectId: "afrisafari",
  storageBucket: "afrisafari.appspot.com",
  messagingSenderId: "810577629376",
  appId: "1:810577629376:web:2c3ea5167f47d047bd5d25",
  measurementId: "G-J9NZ7E2F14"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export {db, storage };
