import { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, Text, ActivityIndicator, Platform, TouchableOpacity } from 'react-native'
import { Container, Modal, Logo, Form,
         Button, ButtonText } from '../../styles/styleds'

import { AuthContext } from '../../contexts/auth'

import InputArea from '../../components/InputArea'
import Checkbox from '../../components/CheckBox'
import AccountText from '../../components/AccountText'

export default function SignIn() {

  const { user } = useContext(AuthContext)

  const [load, setLoad] = useState()
  const [disabled, setDisabled] = useState(true)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checked, setChecked] = useState(false)


  useEffect(() => {
    email && password ? setDisabled(false) : setDisabled(true)
  }, [email, password])

  async function signIn() {

    setLoad(true)
    console.log(user.name)

  }

  return(
    <Container
      behavior={Platform.OS === 'ops' ? 'padding' : ''}
      enabled
    >
        <Modal>
          <Logo source={require('../../images/aurum_coin.png')}/>
          <Form>
            <InputArea
              value={email}
              setValue={setEmail}
              placeHolder={{
                entered: "Email",
                empty: "Enter your email"
              }}
            />
            <InputArea
              value={password}
              setValue={setPassword}
              placeHolder={{
                entered: "Password",
                empty: "Enter your password"
              }}
            />
            <View style={styles.rememberArea}>
              <Checkbox 
                checked={checked}
                setChecked={setChecked}
              />
              <Text style={styles.remember}>remember me?</Text>
            </View>
            <Button
               disableStyle={disabled ? '#2aa44466' : '#2aa444'}
               shadow={disabled ? 'transparent' : 'teal'}
               disabled={disabled}
               onPress={() => signIn()}
            >
              {load ?  
                <ActivityIndicator size="small" color="#fff" />
                : 
                <ButtonText disableStyle={disabled ? '#ccc' : '#fff'}>Sign In</ButtonText>
              }
            </Button>
            <AccountText 
              to="SignUp"
              text="Don't have an account?"
              textButton="Create now!"
            />
          </Form>
        </Modal>
      </Container>
  )
}

const styles = StyleSheet.create({
  rememberArea: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30
  },
  remember: {
    color: '#fff',
    fontSize: 18
  }
})