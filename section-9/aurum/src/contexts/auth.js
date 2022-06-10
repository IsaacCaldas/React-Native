import firebase from '../services/firebase_connection'
import { useState, createContext } from "react"

export const AuthContext = createContext({})

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  async function signUp(name, email, password) {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid

        await firebase.database().ref('users').child(uid).set({
          balance: 0,
          name,
          email
        }).then(() => {
          let data = {
            uid,
            name,
            email
          }
          setUser(data) 
        }).catch((error) => {
          alert("Internal server error, try again.", error.code) 
          return false
        })
      }).catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          alert('Email already in use')
          return false
        }
        else if (error.code === 'auth/invalid-email') {
          alert('Invalid email')
          return false
        }
        else if (error.code === 'auth/weak-password') {
          alert('Password is weak, needs to be at least 6 characters');
          return false
        }
        else {
          alert('Internal server error')
        }
      })
  }

  async function signIn(email, password) {
    await firebase.auth().signInWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid

        await firebase.database().ref('users').child(uid).once('value')
          .then((snapshot) => {
            let data = {
              uid,
              name: snapshot.val().name,
              email: value.user.email
            }
            setUser(data)
          }).catch((error) => {
            alert('Internal server error, try again.')
            return false
          })
      }).catch((error) => {
        if (error.code === 'auth/invalid-email') {
          alert('Invalid email')
          return false
        }
        alert('Internal server error', error.code)
      })
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signUp }}>
      {children}
    </AuthContext.Provider>
  )
}
