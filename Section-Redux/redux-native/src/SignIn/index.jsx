import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

export default function SignIn() {
  
  const navigation = useNavigation()
  const auth = useSelector((state) => state)

  const [disabled, setDisabled] = useState(true)
  const [load, setLoad] = useState(false)

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  useEffect(() => {
    if(email && password) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [email, password])


  function signIn() {
    setLoad(true)
    if(auth && auth[0].email == email && auth[0].password == password) {
      setLoad(false)
      alert('Login successfuly!')
      navigation.navigate('Home')
    }
    setLoad(false)
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={email}
        placeholder='Enter your email'
        onChangeText={(text) => setEmail(text)}
        placeholderTextColor='#fff'
      />
      <TextInput
        style={styles.input}
        value={password}
        placeholder='Enter your password'
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        placeholderTextColor='#fff'
      />
      <TouchableOpacity 
      style={[styles.btn, { 
        backgroundColor: disabled ? '#a1f33a55' : '#a1f33a'
      }]}
      onPress={() => signIn()}
      disabled={disabled}
      > 
        { load ? 
          <ActivityIndicator size='small' color='#fff'/>
        :
          <Text style={styles.btnTxt}>SignIn</Text>
        }
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  btn: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    padding: 5,
    backgroundColor: '#a1f33a',
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTxt: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    height: 40,
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
    borderStyle: 'solid',
    borderBottomColor: '#666',
    borderBottomWidth: 2,
    marginBottom: 20
  }
});
