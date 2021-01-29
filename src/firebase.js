import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCe4kXqJNYllO2VLmIxhc07PUdFSxHWNNE",
  authDomain: "snapchat-clone-3d605.firebaseapp.com",
  projectId: "snapchat-clone-3d605",
  storageBucket: "snapchat-clone-3d605.appspot.com",
  messagingSenderId: "880688860587",
  appId: "1:880688860587:web:bd2d53d88883438477d6ee",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
