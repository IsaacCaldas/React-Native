import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDV-1yNJPnkYfc_Zgib_EIle2M4XrkjEuc",
  authDomain: "myapp-567d3.firebaseapp.com",
  databaseURL: "https://myapp-567d3-default-rtdb.firebaseio.com",
  projectId: "myapp-567d3",
  storageBucket: "myapp-567d3.appspot.com",
  messagingSenderId: "799625390955",
  appId: "1:799625390955:web:92c3b5295364e1fedfba2e",
  measurementId: "G-H52J1N0H59"
};

// Initialize Firebase
if(!firebase.apps.length){
  // open the connection
  firebase.initializeApp(firebaseConfig)
}

export default firebase

