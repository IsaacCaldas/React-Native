import firebase from "firebase/app"
import 'firebase/database'
import 'firebase/auth'

// colocar esses dados em um .env
const firebaseConfig = {
  apiKey: "AIzaSyDr-I8HqPtwBVaPaM2elUSjq5XFLFc6Njw",
  authDomain: "my-tasks-20032022.firebaseapp.com",
  databaseURL: "https://my-tasks-20032022-default-rtdb.firebaseio.com",
  projectId: "my-tasks-20032022",
  storageBucket: "my-tasks-20032022.appspot.com",
  messagingSenderId: "289294224057",
  appId: "1:289294224057:web:2568126dea8e492729a968",
  measurementId: "G-Q9DHR91VLE"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase
