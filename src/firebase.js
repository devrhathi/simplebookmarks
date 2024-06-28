import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "",
    authDomain: "simplebookmarks-8a4f3.firebaseapp.com",
    projectId: "simplebookmarks-8a4f3",
    storageBucket: "simplebookmarks-8a4f3.appspot.com",
    messagingSenderId: "1004690112027",
    appId: "1:1004690112027:web:5e0e68a6a155a786ee42be"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
