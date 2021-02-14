import firebase from 'firebase';
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyCPn-VVH998qeWoK_n5XtUMBknNKVRN34Y",
    authDomain: "barterapp-a8888.firebaseapp.com",
    databaseURL: "https://barterapp-a8888-default-rtdb.firebaseio.com",
    projectId: "barterapp-a8888",
    storageBucket: "barterapp-a8888.appspot.com",
    messagingSenderId: "120017635395",
    appId: "1:120017635395:web:d2fcc44345842748492cf6"
  };

  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.firestore()