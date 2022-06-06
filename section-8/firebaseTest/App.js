import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import firebase from './src/services/firebase_connection';

export default function App() {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [load, setLoad] = useState(false);

  useEffect(() => {
    fetchDataIntoFirebase();
  }, []);

  async function fetchDataIntoFirebase(){
   
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
      <Text>Open up App.js to start working on your app!</Text>
      { load ? 
        <>
          <Text style={styles.welcomeText}>Hello {name}!</Text>
          <Text style={styles.welcomeText}>Your age is {age}!</Text>
        </>
        : <Text style={styles.welcomeText}>Loading...</Text> 
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 20,
    color: '#a23d4b',
    textAlign: 'center',
    marginTop: 10,
  }
});
