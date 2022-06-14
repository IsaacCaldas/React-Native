import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';

import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setAuth } from '../../redux/actions/auth'

export default function SignUp() {

  const navigation = useNavigation()
  const dispatch = useDispatch()

  const [disabled, setDisabled] = useState(true)
  const [load, setLoad] = useState(false)

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [passwordConfirmation, setPasswordConfirmation] = useState()

  useEffect(() => {
    if (passwordConfirmation == password) {
      if(email && password) {
        setDisabled(false)
      }
    } else {
      setDisabled(true)
    } 
  }, [email, password, passwordConfirmation])

  function signUp() {
    setLoad(true)
    dispatch(setAuth({
      email,
      password
    }))
    setLoad(false)
    navigation.navigate('SignIn')
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
      <TextInput
        style={styles.input}
        value={passwordConfirmation}
        placeholder='Confirm your password'
        onChangeText={(text) => setPasswordConfirmation(text)}
        secureTextEntry={true}
        placeholderTextColor='#fff'
      />
      {
        password !== passwordConfirmation &&
        <Text style={{color: '#a11', fontSize: 14}}>Passwords not match</Text>
      }
      <TouchableOpacity 
      style={[styles.btn, { 
        backgroundColor: disabled ? '#a1f33a55' : '#a1f33a'
      }]}
      onPress={() => signUp()}
      disabled={disabled}
      > 
        { load ? 
          <ActivityIndicator size='small' color='#fff'/>
        :
          <Text style={styles.btnTxt}>SignUp</Text>
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
