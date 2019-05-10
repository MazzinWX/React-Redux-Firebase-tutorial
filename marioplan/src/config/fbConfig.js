// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAa2rBm9y03ao9jT2HE1ybBInlg7s1Fhbs",
    authDomain: "mazzinwx-marioplan.firebaseapp.com",
    databaseURL: "https://mazzinwx-marioplan.firebaseio.com",
    projectId: "mazzinwx-marioplan",
    storageBucket: "mazzinwx-marioplan.appspot.com",
    messagingSenderId: "724973880969",
    appId: "1:724973880969:web:c298948d576ee9df"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;