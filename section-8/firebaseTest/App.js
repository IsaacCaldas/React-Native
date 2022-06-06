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
    // Many times get a snapshot
    // await firebase.database().ref('name').on('value', (snapshot) => {
    //   setName(snapshot.val());
    //   setLoad(true);
    // })

    // get a snapshot one time
    await firebase.database().ref('Users/1').once('value', (snapshot) => {
      setName(snapshot.val().name);
      setAge(snapshot.val().age);
      setLoad(true);
    })
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
