import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import api from '../services/api';

export default function Converter({firstCurrency, secondCurrency}) {

  const [value, setValue] = useState(0);
  const [convertedValue, setConvertedValue] = useState()

  async function convert() {
    const response = await api.get(`/convert?q=USD_BRL&compact=ultra&apiKey=7c5ef455b88d735bc6ad`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{firstCurrency} for {secondCurrency}</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter a value to convert"
        onChangeText={(text) => setValue(text)}
        keyboardType="numeric"
      />

      { convertedValue && <Text style={styles.convertedValue}>{convertedValue}</Text> }

      <TouchableOpacity style={styles.button} onPress={() => convert()}>
        <Text style={styles.buttonText}>CONVERT</Text>
      </TouchableOpacity>
      
    </View>
  )

}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    width: "80%",
    height: "auto",
    backgroundColor: '#fefefe',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#aabb33',
    marginBottom: 20
  },
  input: {
    width: "100%",
    height: 50,
    padding: 10,
    backgroundColor: '#ddd',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20
  },
  button: {
    backgroundColor: '#aabb33',
    padding: 10,
    height: 50,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    top: 220
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }, 
  convertedValue: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#111'
  }
})