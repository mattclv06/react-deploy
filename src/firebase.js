import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyD3k81u4PXiLvBMPkjA-U4z8ngzMLP6c6s",
    authDomain: "react-crud-de4c2.firebaseapp.com",
    databaseURL: "https://react-crud-de4c2-default-rtdb.firebaseio.com",
    projectId: "react-crud-de4c2",
    storageBucket: "react-crud-de4c2.appspot.com",
    messagingSenderId: "523890515956",
    appId: "1:523890515956:web:6f0750b4ebacf41bbd23a1"
};

// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
