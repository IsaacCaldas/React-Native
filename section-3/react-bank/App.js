import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Switch, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';

export default function App() {

  const [name, setName] = useState('')
  const [age, setAge] = useState()
  const [selectedGender, setGender] = useState("Male")
  const [bank_limit, setBankLimit] = useState("0.00")
  const [switchValue, setSwitchValue] = useState(false)
  const [user, setUser] = useState()

  const gender = [{ id: 0, name: "Male" }, { id: 1, name: "Female" }, { id: 2, name: "other" }]

  useEffect(() => {
    verifyAge()
  }, [age])

  function verifyAge() {
    if (age && isNaN(age)) {
      alert('Please enter a number for age')
      setAge(0)
    }
  }

  useEffect(() => {
    verifyBankLimit()
  }, [bank_limit])

  function verifyBankLimit() {
    if (bank_limit <= 0) alert('Please enter a number bank limit greater than 0')
  }

  function createUser() {
    if (!name) {
      alert('Please enter a name')
      return
    }
    else if (!age) {
      alert('Please enter an age')
      return
    }
    else if (age < 18) {
      alert('You must be 18 or older to use this app')
      return
    }
    else if (bank_limit <= 0) {
      alert('Please enter a bank limit greater than 0')
      return
    }
    else {
      setUser({
        name: name,
        age: age,
        gender: selectedGender,
        bank_limit: bank_limit,
        student: switchValue ? "Yes" : "No"
      })
    }
  }

  function register() {
    return (
      <>
        <TextInput style={styles.input} placeholder="Enter your name" value={name} onChangeText={(text) => setName(text)} />
        <TextInput style={styles.input} placeholder="Enter your age" value={age} onChangeText={(text) => setAge(text)} />
        <Picker style={styles.picker}
          selectedValue={age}
          onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
        >
          {gender.map(gender => <Picker.Item label={gender.name} key={gender.id} value={gender.name} /> )}
        </Picker>
        <View style={styles.row}>
          <Text>Bank limit </Text>
          <Slider
            minimumValue={0}
            maximumValue={5000}
            onValueChange={(value) => setBankLimit(value.toFixed(2))}
            value={bank_limit}
            minimumTrackTintColor="#81D532"
            maximumTrackTintColor="red"
          />
        </View>
        <Text>Your bank limit: R$ {bank_limit}</Text>
        <View style={styles.row}>
          <Text>Student? </Text>
          <Switch
            value={switchValue}
            onValueChange={(value) => setSwitchValue(value)}
          />
        </View>
        <Button title="Register" onPress={() => createUser()} />
      </>
    )
  }

  useEffect(() => {
    userCreated()
  }, [user])

  function userCreated() {
    
    if (user && user.name && user.age && user.gender && user.bank_limit && user.student) {
      return (
        <>
          <Text style={styles.user}>Name: {user.name}</Text>
          <Text style={styles.user}>Age: {user.age}</Text>
          <Text style={styles.user}>Gender: {user.gender}</Text>
          <Text style={styles.user}>Bank limit: R$ {user.bank_limit}</Text>
          <Text style={styles.user}>Student: {user.student}</Text>
        </>
      )
    }
  }

  return (
    <View style={styles.container}>
      <View  style={styles.boxRegister}>
        <Text style={styles.title}>React Bank</Text>
        {user ? userCreated() : register()}
      </View>
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
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  boxRegister: {
    width: 300,
    height: 400,
    backgroundColor: '#dddddd',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
    color: 'red'
  },
  input: {
    width: '100%',
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 3,
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#fff'
  },
  picker: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 3,
    marginBottom: 5,
    padding: 10
  },
  user: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5, 
  }
});
