import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDi5q2VE5LAHjWJXNrADGQ4BRICmhDKD8Y",
    authDomain: "todo-app-eae10.firebaseapp.com",
    projectId: "todo-app-eae10",
    storageBucket: "todo-app-eae10.appspot.com",
    messagingSenderId: "1065891867251",
    appId: "1:1065891867251:web:12174c335a3a8d4e85d806",
    measurementId: "G-CHLWT9FFNK"
});

const db = firebaseApp.firestore();

export default db; 