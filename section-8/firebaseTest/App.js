import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';

import firebase from './src/services/firebase_connection';

import Users from './src/components/Users';

export default function App() {

  const [users, setUsers] = useState([]);
  const [load, setLoad] = useState(false);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    fetchDataIntoFirebase();
  }, []);

  async function fetchDataIntoFirebase() {
    await firebase.database().ref('Users').on('value', (snapshot) => {
      snapshot.forEach((child) => {
        let user = {
          key: child.key,
          name: child.val().name,
          age: child.val().age
        }
        
        setUsers(users => [...users, user]);
        setLoad(true);
      })
    })
    console.log(users);
  }

  function saveData(){

    if (name === '' || age === '') {
      alert('Please fill the form');
      return;
    } 

    let users = firebase.database().ref('Users')
    let key = users.push().key;

    users.child(key).set({
      name,
      age
    })

    setName('');
    setAge('');
    alert('Data saved successfully');
   
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
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            onChangeText={(text) => setName(text)}
            value={name}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your age"
            onChangeText={(text) => setAge(text)}
            value={age}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => saveData()}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
      { load ? 
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
    }
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
    height: 350,
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
  }
});
