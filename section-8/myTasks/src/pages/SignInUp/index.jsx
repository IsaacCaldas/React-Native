import { useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'

import firebase from '../../services/firebase_connection'
import { useNavigation } from '@react-navigation/native'

export default function SignInUp() {
  
  const navigation = useNavigation()

  const [isNewUser, setIsNewUser] = useState(false)
  const [load, setLoad] = useState(false)
  const [user, setUser] = useState()
  const [logged, setLogged] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPasswordConfirmation] = useState('')
  const [password_not_match, setPasswordNotMatch] = useState(false)

  useEffect(() => {
    password !== password_confirmation ? setPasswordNotMatch(true) : setPasswordNotMatch(false)
  }, [password_confirmation])

  useEffect(() => {
    user && navigation.navigate('Home', { user }) 
  }, [user])

  async function signUp(){
    setLoad(true)

    if (email.length === 0 || password.length === 0 || name.length === 0) {
      alert('Please fill in all fields')
      setLoad(false)
      return
    }
    if (password_not_match) {
      alert('Password not match')
      setLoad(false)
      return
    }

    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((value) => {
        
        firebase.database().ref('users').child(value.user.uid).set({
          name: name,
          email: email
        })

        alert(`${value.user.email} is successfully registered`)
        setName('')
        setEmail('')
        setPassword('')
        setPasswordConfirmation('')
        setIsNewUser(false)
        setLoad(false)

      }).catch((error) => {
        
        if (error.code === 'auth/email-already-in-use') {
          alert('Email already in use')
          setEmail('')
          setLoad(false)
          return
        }
        else if (error.code === 'auth/invalid-email') {
          invalidEmail()
          return
        }
        else if (error.code === 'auth/weak-password') {
          alert('Password is weak, needs to be at least 6 characters');
          setPassword('')
          setLoad(false)
          return
        }
        else {
          serverError();
        }
      });
  }

  async function signIn(){

    setLoad(true)

    if (email.length === 0 || password.length === 0) {
      alert('Please fill in all fields')
      setLoad(false)
      return
    }

    await firebase.auth().signInWithEmailAndPassword(email, password)
      .then((value) => {
        setEmail('')
        setPassword('')
        setLoad(false)
        setUser(value.user.uid)
      }
      ).catch((error) => {
        if (error.code === 'auth/invalid-email') {
          invalidEmail()
          return
        }
        else if (error.code === 'auth/user-not-found') {
          alert('User not found')
          setEmail('')
          setLoad(false)
          return
        }
        else if (error.code === 'auth/wrong-password') {
          alert('Wrong password')
          setPassword('')
          setLoad(false)
          return
        }
        else {
          serverError()
        }
      })
  }

  function invalidEmail() {
    alert('Invalid email')
    setEmail('')
    setLoad(false)
  }

  function serverError(){
    alert('Internal server error')
    setLoad(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <View style={styles.form_item}>
          <Text style={styles.title}>{ isNewUser ? 'Sign Up' : 'Login' }</Text>
          { isNewUser &&
            <TextInput
              style={styles.input}
              placeholder="Enter you name"
              onChangeText={(text) => setName(text)}
              value={name}
              placeholderTextColor="#666" 
            />
          }
          <TextInput
            style={styles.input}
            placeholder="johndoe@who.com"
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholderTextColor="#666"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
            placeholderTextColor="#666"
          />
          { isNewUser && 
            <TextInput
              style={styles.input}
              placeholder="Confirm your password"
              onChangeText={(text) => setPasswordConfirmation(text)}
              value={password_confirmation}
              secureTextEntry={true}
              placeholderTextColor="#666"
            />
          }
          {isNewUser && password_not_match && <Text style={styles.error}>Password does not match</Text>}
          <TouchableOpacity
            style={styles.button}
            onPress={() => isNewUser ? signUp() : signIn()}
          >
            {load ?  
                <ActivityIndicator size="small" color="#fff" />
              : 
                <Text style={styles.buttonText}>{ isNewUser ? 'Save' : 'Sign In' }</Text>
            }
          </TouchableOpacity>
        </View>

        <View style={styles.signUpArea}>
          <Text style={styles.signUpTitle}>{ isNewUser ? 'Already have an account?' : 'Don\'t have an account?' }
            <TouchableOpacity onPress={() => setIsNewUser(!isNewUser)}>
              <Text style={styles.buttonSignUpText}>{ isNewUser ? 'Sign In' : 'Sign Up' }</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20
  },
  form: {
    width: "80%",
    height: 450,
    backgroundColor: '#222',
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'space-between'
  },
  form_item: {
    width: "100%",
    textAlign: 'center'
  },
  title: {
    fontSize: 40,
    color: '#eee',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: '#c33333',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    color: '#fff',
    backgroundColor: '#333'
  },
  button: {
    backgroundColor: '#c33333',
    width: "100%",
    padding: 10,
    marginTop: 10,
    marginBottom: 5,
    borderRadius: 5,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  loading: {
    width: "80%",
    height: 80,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 20,
    marginTop: 20
  },
  error: {
    color: '#c33333',
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10
  },
  signUpArea: {
    flexDirection: 'row'
  },
  signUpTitle: {
    color: '#eee',
    fontSize: 14,
    fontWeight: 'bold'
  },
  buttonSignUpText: {
    color: '#c33333',
    fontSize: 14,
    marginLeft: 10
  }
})
