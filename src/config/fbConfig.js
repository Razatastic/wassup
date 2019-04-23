import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const fbApiKey = process.env.REACT_APP_FB_API_KEY;

// Initialize Firebase
var config = {
  apiKey: fbApiKey,
  authDomain: "wassup-app.firebaseapp.com",
  databaseURL: "https://wassup-app.firebaseio.com",
  projectId: "wassup-app",
  storageBucket: "wassup-app.appspot.com",
  messagingSenderId: "406465812382"
};
firebase.initializeApp(config);

export default firebase;
