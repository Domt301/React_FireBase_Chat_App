import firebase from 'firebase';

const config = {
    apiKey:"BETTER",
    authDomain: "LUCK",
    databaseURL:"NEXT TIME"
};

firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();