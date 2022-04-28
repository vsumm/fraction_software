import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var config = {
    apiKey: "AIzaSyB-ntZXQIpTwyhkZrmJtXrCvZIibuSx8rQ",
    authDomain: "fraction-analytics-5bdcc.firebaseapp.com",
    databaseURL: "https://fraction-analytics-5bdcc-default-rtdb.firebaseio.com",
    projectId: "fraction-analytics-5bdcc",
    storageBucket: "fraction-analytics-5bdcc.appspot.com",
    messagingSenderId: "724096407392",
    appId: "1:724096407392:web:763337c3cb803dd1623005",
    measurementId: "G-7SSNYYEMXK"
};

const fire = firebase.initializeApp(config);
export default fire;