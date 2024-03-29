import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "react-todo-firebase-8556e.firebaseapp.com",
  databaseURL: "https://react-todo-firebase-8556e.firebaseio.com",
  projectId: "react-todo-firebase-8556e",
  storageBucket: "",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: "1:331889090881:web:2463244552b32756"
};

firebase.initializeApp(firebaseConfig)
// firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;
