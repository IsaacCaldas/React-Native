import { useState, useEffect } from 'react'
import { Picker, ActivityIndicator } from 'react-native'

import { Button, ButtonText, Form,
         Content, Section, Title, Select } from '../../styles/styleds'

import Header from '../../components/Header'
import InputArea from '../../components/InputArea'

export default function NewRegister() {

  const [disabled, setDisabled] = useState(true)
  const [load, setLoad] = useState()
  const [value, setValue] = useState()
  const [type, setType] = useState()

  useEffect(() => {
    value && type ? setDisabled(false) : setDisabled(true)
  }, [value, type])

  function newCashRegister() {
    console.log(type)
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
