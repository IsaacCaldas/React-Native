import { useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';

import api from '../services/api';

export default function CepFinder({cepData, setLoading}) {

  const [cep, setCep] = useState('')
  const inputCep = useRef(null)

  async function handleSearchCep() {

    if(!cep) {
      inputCep.current.focus()
      return
    }

    if (cep.length !== 8) {
      Keyboard.dismiss()
      alert('Invalid CEP')
      return
    }
    setLoading(true)
    await api.get(`/${cep}/json`).then(response => {
      if (response.data.erro) {
        cepData("")
        Keyboard.dismiss()
        setLoading(false)
        alert('CEP not found')
        return
      }
      cepData(response.data)
      Keyboard.dismiss()
      setLoading(false)
    }).catch(error => {
      cepData("")
      Keyboard.dismiss()
      setLoading(false)
      alert('Internal server error')
    })
  }

  function newCep() {
    inputCep.current.focus()
    setCep('')
  }

  return (
    <View style={styles.findingArea}>
      <View style={styles.header}>
        <Text style={styles.title}>CEP Finder</Text>
      </View>
      <Text style={styles.text}>
        Find the address of your Cep
      </Text>
      <TextInput 
        style={styles.input} 
        value={cep}
        placeholder="Enter your Cep" 
        onChangeText={(text) => setCep(text)}
        ref={inputCep}
        keyboardType="numeric"
        maxLength={8}
      />
      <View style={styles.buttonArea}>
        <TouchableOpacity 
          style={[styles.button, styles.green]}
          onPress={() => handleSearchCep()}
        >
          <Text style={styles.buttonText}>Find</Text>
        </TouchableOpacity>
        <Text style={styles.frufru}> | </Text>
        <TouchableOpacity style={[styles.button, styles.red]} 
          onPress={() => newCep()}
        >
          <Text style={styles.buttonText}>New CEP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  findingArea: {
    marginBottom: 30,
  },
  header: {
    height: 50,
    backgroundColor: '#555',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#666',
    marginBottom: 10
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    margin: 5,
    color: '#32e4a3'
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: '#eee',
    marginTop: 15,
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 10,
    color: '#32e4a3',
    textAlign: 'center'
  },
  buttonArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
    flex: 1
  },
  frufru: {
    fontSize: 30,
    color: '#666'
  },
  button: {
    width: 100,
    height: "auto",
    padding: 10,
    alignItems: 'center',
    borderRadius: 5
  },
  green: {
    backgroundColor: '#32e4a3'
  },
  red: {
    backgroundColor: '#dd3d3d'
  },
  buttonText: {
    color: '#eee',
    fontSize: 15,
    fontWeight: 'bold'
  }
});
