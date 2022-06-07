import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';

import firebase from './src/services/firebase_connection';

import Users from './src/components/Users';

export default function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const [password_not_match, setPasswordNotMatch] = useState(false);

  const [load, setLoad] = useState(false);

  useEffect(() => {
    password !== password_confirmation ? setPasswordNotMatch(true) : setPasswordNotMatch(false);
  }, [password_confirmation]);

  async function signUp(){

    setLoad(true);

    if (email.length === 0 || password.length === 0) {
      alert('Please fill in all fields');
      setLoad(false);
      return;
    }

    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((value) => {
        alert(`${value.user.email} is successfully registered`);
        setEmail('');
        setPassword('');
        setLoad(false);
      }).catch((error) => {
        
        if (error.code === 'auth/email-already-in-use') {
          alert('Email already in use');
          setEmail('');
          setLoad(false);
          return
        }
        else if (error.code === 'auth/invalid-email') {
          alert('Invalid email');
          setEmail('');
          setLoad(false);
          return
        }
        else if (error.code === 'auth/weak-password') {
          alert('Password is weak, needs to be at least 6 characters');
          setPassword('');
          setLoad(false);
          return
        }
        else {
          alert('Internal server error');
          setLoad(false);
        }
      });
   
    // create a node
    // await firebase.database().ref('type').set('admin')

    // remove a node
    // await firebase.database().ref('type').remove()

    // add a child into a node
    // await firebase.database().ref('Users').child(3).set({
    //   name: 'John Doe',
    //   age: '25'
    // })

    // remove a child 
    // await firebase.database().ref('Users').child(3).remove()

    // update a data into child
    // await firebase.database().ref('Users').child(3).update({
    //   name: 'Junin'
    // })
      
    // set a data into child
    // await firebase.database().ref('Users').child(2).child('name').set('Isabelle')

    // remove a data into child
    // await firebase.database().ref('Users').child(2).child('name').remove()

  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.form_item}>
          <Text style={styles.title}>Sign Up</Text>
          <TextInput
            style={styles.input}
            placeholder="johndoe@who.com"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm your password"
            onChangeText={(text) => setPasswordConfirmation(text)}
            value={password_confirmation}
            secureTextEntry={true}
          />
          {password_not_match && <Text style={styles.error}>Password does not match</Text>}
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => signUp()}
        >
          {load ?  
              <ActivityIndicator size="small" color="#fff" />
            : 
              <Text style={styles.buttonText}>Save</Text>
          }
        </TouchableOpacity>
      </View>
      {/* { load ? 
      <>
        <View style={styles.list}>
          <FlatList
            data={users}
            renderItem={({ item }) => <Users data={item} />}
            keyExtractor={item => item.key}
          />
        </View>
      </>
      :
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#a23d4b" />
      </View>
    } */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20
  },
  list: {
    width: '80%',
    marginTop: 20,
    backgroundColor: '#222',
    padding: 20,
    borderRadius: 10,
  },
  welcomeText: {
    fontSize: 20,
    color: '#a23d4b',
    textAlign: 'center',
    marginTop: 10,
  },
  form: {
    width: "80%",
    height: 400,
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
    borderColor: '#a23d4b',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    color: '#fff',
    backgroundColor: '#333'
  },
  button: {
    backgroundColor: '#a23d4b',
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
    color: '#a23d4b',
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10
  }
});
