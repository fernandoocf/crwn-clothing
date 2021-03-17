import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCapT1ilaef6iRBCQwMDHSgG0vmp0PDMOQ",
    authDomain: "crown-db-54b0f.firebaseapp.com",
    projectId: "crown-db-54b0f",
    storageBucket: "crown-db-54b0f.appspot.com",
    messagingSenderId: "984086004820",
    appId: "1:984086004820:web:b40125a5ba96ca6982d9c1",
    measurementId: "G-FQTRMH5KGV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;