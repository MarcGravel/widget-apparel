//api key is allowed to be visible on github in the case of firebase. we have to do so because this is how firebase
//connects to the application. This is perfectly safe, and the intended purpose of this public API key. 
//GitGuardian has acknowledged that this is not an issue.

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAORoHgJRHmUUVXPPLud-Q9Rxa9nONylTI",
    authDomain: "widget-db.firebaseapp.com",
    projectId: "widget-db",
    storageBucket: "widget-db.appspot.com",
    messagingSenderId: "439258725880",
    appId: "1:439258725880:web:fd4db3e087eff886eaaa0d",
    measurementId: "G-H20Q6VRE61"
};

//take user auth object from google auth and query db for data exists
export const createUserProfileDocument = async (userAuth, additionalData) => {
    //if userAuth doesnt exist (nothing is passed)
    if (!userAuth) {
        return;
    }

    //query documentRef to check if userAuth's id exists in Db yet
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    //query snapshot (snapshot represents data only, cannot modify. use documentRef to modify data)
    const snapShot = await userRef.get();

    //if snapshot doesnt exist then no user with that id exists in db. so create new user
    if(!snapShot.exists) {
        //grabs data from google userauth sign in object 
        const { displayName, email } = userAuth;
        //create date object when document was created
        const createdAt = new Date();

        //async request to db to store data of user into db
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }
    //returns the userRef object from db data
    return userRef;
}

//sets config object created above
firebase.initializeApp(config);

//auth exported out so can use it whenever needed anything related to authentication
export const auth = firebase.auth();

//same with store for db storage
export const firestore = firebase.firestore();

// access to google auth inside the auth library then set up custum params
const provider = new firebase.auth.GoogleAuthProvider();

//trigger google select acount pop up whenever GoogleAuthProvider is used
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;