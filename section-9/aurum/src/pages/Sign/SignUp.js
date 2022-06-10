import { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, ActivityIndicator, Platform} from 'react-native'
import { Container, Modal, Logo, Form,
         Button, ButtonText } from '../../styles/styleds'

import { AuthContext } from '../../contexts/auth'

import InputArea from '../../components/InputArea'
import AccountText from '../../components/AccountText'

export default function SignUp() {

  const { signUp } = useContext(AuthContext)

  const [load, setLoad] = useState(false)
  const [disabled, setDisabled] = useState(true)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [passwordMatch, setPasswordMatch] = useState(true)

  useEffect(() => {
    if (password && password.length > 0) {
      password !== passwordConfirmation ? setPasswordMatch(false) : setPasswordMatch(true)
    }
  }, [passwordConfirmation, password])

  useEffect(() => {
    if (name && email && password && passwordConfirmation) {
      password !== passwordConfirmation ? setDisabled(true) : setDisabled(false)
    } 
    else {
      setDisabled(true)
    }
  }, [name, email, password, passwordConfirmation])

  function handleSignUp() {
    setLoad(true)
    signUp(name, email, password)
    setLoad(false)
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
            value={name}
            setValue={setName}
            placeHolder={{
              entered: "Name",
              empty: "Enter your name"
            }}
          />
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
            password
            placeHolder={{
              entered: "Password",
              empty: "Enter your password"
            }}
          />
          <InputArea
            value={passwordConfirmation}
            setValue={setPasswordConfirmation}
            password
            placeHolder={{
              entered: "Password confirmation",
              empty: "Confirm your password"
            }}
          />
          {!passwordMatch && <Text style={styles.passwordMatch}>Passwords do not match</Text>}

          <Button 
            disableStyle={disabled ? '#2aa44466' : '#2aa444'}
            shadow={disabled ? 'transparent' : 'teal'}
            disabled={disabled}
            onPress={() => handleSignUp()}
          >
            {load ?  
              <ActivityIndicator size="small" color="#fff" />
              : 
              <ButtonText disableStyle={disabled ? '#ccc' : '#fff'}>Sign Up</ButtonText>
            }
          </Button>
          <AccountText
            to="SignIn"
            text="Have an account?"
            textButton="Sign In here"
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
  },
  passwordMatch: {
    color: 'red',
    fontSize: 13
  }
})