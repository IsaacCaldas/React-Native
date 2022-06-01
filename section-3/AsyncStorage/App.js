import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [input_data, setInputData] = useState('');
  const [name, setName] = useState()
  const [prev_name, setPrevName] = useState()

  function setToName() {
    setPrevName(name)
    setName(input_data)
    alert(`The name: ${input_data} has been saved!`);
    Keyboard.dismiss(); // After the action is done, dismiss the keyboard
  }

  useEffect(() => {
    if (name) {
      name !== prev_name && setInAsyncStorage()
      getInAsyncStorage()
    }
  }, [name])

  useEffect(() => {
    getInAsyncStorage()
  }, [])

  const setInAsyncStorage = async () => await AsyncStorage.setItem('name', name);
  const getInAsyncStorage = async () => {
    const resp = await AsyncStorage.getItem('name')
    if (resp !== undefined) {
      setPrevName(name)
      setName(resp)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewInput}>
        <TextInput 
          style={styles.input} 
          value={input_data}
          onChangeText={(text) => setInputData(text)}
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity onPress={() => setToName()}>
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.name}>{name ? name : "No data"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  viewInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: '#222',
    borderWidth: 1,
    padding: 10
  },
  button: {
    backgroundColor: '#222',
    color: '#fff',
    height: 40,
    padding: 10,
    marginLeft: 4
  },
  name: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
