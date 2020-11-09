import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCsqLIEUrmMGTD7EXyRqkCn-VlU-d2V6K8",
  authDomain: "book-santa-c1c27.firebaseapp.com",
  databaseURL: "https://book-santa-c1c27.firebaseio.com",
  projectId: "book-santa-c1c27",
  storageBucket: "book-santa-c1c27.appspot.com",
  messagingSenderId: "564136043199",
  appId: "1:564136043199:web:96a533e66dae9268a9dc0a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
