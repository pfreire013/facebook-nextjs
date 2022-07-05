import firebase from 'firebase'
import 'firebase/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzpm0jQNwQvQYnS--YFwDJzTtLb2jAA48",
  authDomain: "facebok-nextjs.firebaseapp.com",
  projectId: "facebok-nextjs",
  storageBucket: "facebok-nextjs.appspot.com",
  messagingSenderId: "213568425118",
  appId: "1:213568425118:web:bbbc201bfa79a606be3f8f",
  measurementId: "G-Q5MKCK673F"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore()
const storage = firebase.storage()

export { db, storage }