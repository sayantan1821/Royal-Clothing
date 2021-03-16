import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB7vLTa3sLvLjg_TbimyHTs1O697bvJKCk",
    authDomain: "clothing-db-7d0b4.firebaseapp.com",
    projectId: "clothing-db-7d0b4",
    storageBucket: "clothing-db-7d0b4.appspot.com",
    messagingSenderId: "67602362116",
    appId: "1:67602362116:web:318d8402f418a593f1ea51",
    measurementId: "G-MZLYHKSD9W"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;
