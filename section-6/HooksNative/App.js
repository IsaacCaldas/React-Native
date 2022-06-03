import { useState, useEffect, useMemo, useRef } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function App() {

  const [inputText, setInputText] = useState('')
  const [name, setName] = useState('')

  useEffect(() => getItem(), []);
  const getItem = async () => {
    await AsyncStorage.getItem('name').then(value => value && setName(value))
  }

  useEffect(() => setToStorage(), [name]);
  const setToStorage = async () => await AsyncStorage.setItem('name', name)

  const save = () => setName(inputText)

  // let name_lenght = name.length - Much renders
  // console.log('name_lenght', name_lenght)
  const name_lenght = useMemo(() => {
    // console.log('name_lenght', name.length)
    // few renders
    return name.length
  }, [name])

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>Have {name_lenght} letters</Text>
      </View>
      <View>
        <TextInput style={styles.input} placeholder="Enter your name" onChangeText={(text) => setInputText(text)} />
        <TouchableOpacity style={styles.button} onPress={() => save()}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    margin: 5,
    color: '#32e4a3'
  },
  subTitle: {
    fontSize: 25,
    textAlign: 'center',
    color: '#32a4a3'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 10,
    color: '#32e4a3'
  },
  button: {
    backgroundColor: '#32e4a3',
    padding: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: '#222',
    fontSize: 20
  }

});
