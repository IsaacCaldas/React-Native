import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCChy3SIcqy4NBXi-7r3KaExWwUJXOPixA",
  authDomain: "aurum-11c65.firebaseapp.com",
  databaseURL: "https://aurum-11c65-default-rtdb.firebaseio.com",
  projectId: "aurum-11c65",
  storageBucket: "aurum-11c65.appspot.com",
  messagingSenderId: "675813226974",
  appId: "1:675813226974:web:f4217ce4112befc7d1054f",
  measurementId: "G-7V0CDS49ZC"
};

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase