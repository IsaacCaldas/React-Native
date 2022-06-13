import { useState, useEffect, useContext } from 'react'
import { Picker, ActivityIndicator, Keyboard } from 'react-native'
import { format } from 'date-fns'
import { useNavigation } from '@react-navigation/native'

import firebase from '../../services/firebase_connection'
import { AuthContext } from '../../contexts/auth'

import { Button, ButtonText, Form,
         Content, Section, Title, Select } from '../../styles/styleds'

import Header from '../../components/Header'
import InputArea from '../../components/InputArea'

export default function NewRegister() {
  const navigation = useNavigation()
  const { user: _user } = useContext(AuthContext)

  const [disabled, setDisabled] = useState(true)
  const [load, setLoad] = useState()
  const [value, setValue] = useState()
  const [type, setType] = useState(1)

  useEffect(() => {
    value && type ? setDisabled(false) : setDisabled(true)
  }, [value, type])

  async function newCashRegister() {
    Keyboard.dismiss()
    
    if(isNaN(parseFloat(value)) || type === null) {
      alert('Fill in all fields.')
      return
    }
    
    let value_in_cents = parseFloat(value.toString().replace(",", ".")) * 100    
    
    let uid = _user.uid
    let key = await firebase.database().ref('user_cash_history').child(uid).push().key;

    await firebase.database().ref('user_cash_history').child(uid).child(key).set({
      type,
      value: value_in_cents,
      date: format(new Date(), 'dd/MM/yy')
    })

    let user = firebase.database().ref('users').child(uid)
    await user.once('value').then((snapshot) => {
      let balance = parseFloat(snapshot.val().balance)

      type == '1' ? balance += value_in_cents : balance -= value_in_cents
      user.child('balance').set(balance)
    })

    setValue('')
    Keyboard.dismiss()
    navigation.navigate('Home')
  }

  return (
    <Content>
      <Header/>
      <Section centered>
        <Title>Cash history register</Title>
        <Form>
          <InputArea
            value={value}
            setValue={setValue}
            placeHolder={{
              entered: "Value",
              empty: "Enter a new value"
            }}
          />
          <Select 
            selectedValue={type}
            onValueChange={(itemValue, itemIndex) => setType(itemValue)}
          >
            <Picker.Item key={1} value={1} label='Incoming'/>
            <Picker.Item key={2} value={2} label='Outcoming'/>
          </Select>
        </Form>
        <Button 
          disableStyle={disabled ? '#2aa44466' : '#2aa444'}
          shadow={disabled ? 'transparent' : 'teal'}
          disabled={disabled}
          onPress={() => newCashRegister()}
          >
          {load ?  
            <ActivityIndicator size="small" color="#fff" />
            : 
            <ButtonText disableStyle={disabled ? '#ccc' : '#fff'}>Save to cash history</ButtonText>
          }
        </Button>
      </Section>
    </Content>
  )
}
