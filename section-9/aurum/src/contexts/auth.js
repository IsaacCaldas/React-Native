import { useState, useEffect, createContext } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

import firebase from '../services/firebase_connection'

export const AuthContext = createContext({})

export default function AuthProvider({ children }) {

  const navigation = useNavigation()
  const [user, setUser] = useState(null)
  const [load, setLoad] = useState(true)

  useEffect(() => {
    loadStorage()
  }, [])

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
          toStore(data)

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

  async function signIn(email, password, checked) {
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
            
            checked && toStore(data)

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

  async function signOut() {
    await firebase.auth().signOut()
    await AsyncStorage.clear()
      .then(() => {
        setUser(null)
      })
  }

  async function toStore(data) {
    await AsyncStorage.setItem('Auth_user', JSON.stringify(data))
  }

  async function loadStorage() {
    let auth_user = await AsyncStorage.getItem('Auth_user')

    if(auth_user) {
      setUser(JSON.parse(auth_user))
    } 
    setLoad(false)
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, load, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
