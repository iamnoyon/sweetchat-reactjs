import React from 'react';
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAX9bxbii-AJWVlxuxlUn7LKLATJF17ZwE",
    authDomain: "sweetchat-reactjs.firebaseapp.com",
    databaseURL: "https://sweetchat-reactjs.firebaseio.com",
    projectId: "sweetchat-reactjs",
    storageBucket: "sweetchat-reactjs.appspot.com",
    messagingSenderId: "654894865318",
    appId: "1:654894865318:web:047ba35d990af9c0470d67",
    measurementId: "G-JNJQLW3CNX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;