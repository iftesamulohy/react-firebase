import firebase from 'firebase';
import "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyAd7DvuqYH1RchdBiAxGSk3IT1zLIzgv78",
    authDomain: "react-form-8a9b0.firebaseapp.com",
    projectId: "react-form-8a9b0",
    storageBucket: "react-form-8a9b0.appspot.com",
    messagingSenderId: "975633215032",
    appId: "1:975633215032:web:4915ea92a5b1092efc80cd"
  };
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
export {storage, firebase as default};