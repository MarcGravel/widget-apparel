//api key is allowed to be visible on github in the case of firebase. we have to do so because this is how firebase
//connects to the application. This is perfectly safe, and the intended purpose of this public API key. 
//GitGuardian has acknowledged that this is not an issue.

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAORoHgJRHmUUVXPPLud-Q9Rxa9nONylTI",
    authDomain: "widget-db.firebaseapp.com",
    projectId: "widget-db",
    storageBucket: "widget-db.appspot.com",
    messagingSenderId: "439258725880",
    appId: "1:439258725880:web:fd4db3e087eff886eaaa0d",
    measurementId: "G-H20Q6VRE61"
};

//sets config object created above
firebase.initializeApp(config);

//auth exported out so can use it whenever needed anything related to authentication
export const auth = firebase.auth();

//same with store for db storage
export const firestore = firebase.firestore();

// access to google auth inside the auth library then set up custum params
const provider = new firebase.auth.GoogleAuthProvider();

//trigger google select acount pop up whenever GoogleAuthProvider is used
provider.setCustomParameters({ promp: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;