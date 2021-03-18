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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;