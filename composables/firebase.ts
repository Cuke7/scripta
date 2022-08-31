import { getDatabase, ref as refdB, set as setdB, child, get as getdB, push } from "firebase/database";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCpDieJh7SInMrISXMFFO7xoUIM4Dzg5dA",
    authDomain: "scoriae.firebaseapp.com",
    projectId: "scoriae",
    storageBucket: "scoriae.appspot.com",
    messagingSenderId: "107441951302",
    appId: "1:107441951302:web:e8d88f5f6f731817c6f047",
    databaseURL: "https://scoriae-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let database = getDatabase(app);

const auth = getAuth(app);
auth.languageCode = "fr";
const provider = new GoogleAuthProvider();

export const logOut = () => {
    signOut(auth)
        .then(() => {
            // Sign-out successful.
        })
        .catch((error) => {
            // An error happened.
        });
}

export const logIn = () => {
    console.log("hey")
    signInWithPopup(auth, provider)
        .then((result) => { })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
}

const dbRef = refdB(getDatabase(app));

export const readData = (path) => {
    return new Promise((resolve, reject) => {
        getdB(child(dbRef, path))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    resolve(snapshot.val());
                    // console.log(snapshot.val());
                } else {
                    reject(null);
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}

export { onAuthStateChanged, auth }