import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyACyxgUq5N_x7_UbsFaIe0cRHgYvUKDn90",
    authDomain: "catch-of-the-day-cd9db.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-cd9db.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

//this is a default export
export default base;