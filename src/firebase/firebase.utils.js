import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBa_3GpAb3LfJl1H97Kv12YAk3UT_UXIOg",
  authDomain: "crwn-db-c07a7.firebaseapp.com",
  databaseURL: "https://crwn-db-c07a7.firebaseio.com",
  projectId: "crwn-db-c07a7",
  storageBucket: "crwn-db-c07a7.appspot.com",
  messagingSenderId: "279651069486",
  appId: "1:279651069486:web:c9d5361338cf6567ddb9bf",
  measurementId: "G-W2SZFJQWX3",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
