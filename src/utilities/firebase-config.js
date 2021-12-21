import 'firebase/compat/database'
import firebase from 'firebase/compat/app'

const firebaseConfig = {
    apiKey: "AIzaSyDYO_3o5IAtycs038k8TnrioFJlz7zzxB0",
    authDomain: "dash-fire-d7e3a.firebaseapp.com",
    databaseURL: "https://dash-fire-d7e3a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "dash-fire-d7e3a",
    storageBucket: "dash-fire-d7e3a.appspot.com",
    messagingSenderId: "1066552071561",
    appId: "1:1066552071561:web:58d57ad3f3dbdfd744fd58",
    measurementId: "G-261BBJQT1Z"
  };
  

  const fireDb = firebase.initializeApp(firebaseConfig)

  export default fireDb.database().ref()