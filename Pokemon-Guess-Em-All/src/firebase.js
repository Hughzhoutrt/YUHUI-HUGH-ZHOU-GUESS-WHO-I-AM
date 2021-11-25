import firebase from'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCQKrGpGySeuQTrLDzZ5T0IOqLipmITu5s",
    authDomain: "guess-who-i-am-1036b.firebaseapp.com",
    projectId: "guess-who-i-am-1036b",
    storageBucket: "guess-who-i-am-1036b.appspot.com",
    messagingSenderId: "949524121976",
    appId: "1:949524121976:web:1cbeb059bfa2cf26fc608d",
    measurementId: "G-Q2V4FZM4KT"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;