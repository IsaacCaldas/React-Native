import { useState, createContext } from "react"
import firebase from '../services/firebase_connection'

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
          return 
        }).catch((error) => {
          alert("Internal server error, try again.")
          return 
        })
      }).catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          alert('Email already in use')
          return
        }
        else if (error.code === 'auth/invalid-email') {
          alert('Invalid email')
          return
        }
        else if (error.code === 'auth/weak-password') {
          alert('Password is weak, needs to be at least 6 characters');
          return
        }
      })
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signUp }}>
      {children}
    </AuthContext.Provider>
  )
}
