import React from 'react'
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var config = {
  apiKey: "AIzaSyA9UH4jnCDF4KVPeRXqP3rYvAn4S6YPfP0",
  authDomain: "wourder-c3742.firebaseapp.com",
  databaseURL: "https://wourder-c3742.firebaseio.com",
  projectId: "wourder-c3742",
  storageBucket: "wourder-c3742.appspot.com",
  messagingSenderId: "773240412304",
  appId: "1:773240412304:web:03257bdfcef6a9041aa015",
  measurementId: "G-6P80DBVB5V"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}

export default Firebase