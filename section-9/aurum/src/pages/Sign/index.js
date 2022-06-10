import { useState } from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import { Container, Modal, Logo, Form,
         Button, ButtonText } from '../../styles/styleds'

import InputArea from '../../components/InputArea'
import Checkbox from '../../components/CheckBox'

export default function Sign() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checked, setChecked] = useState(false)
  
  return (
    <Container>
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
          <Button>
            <ButtonText>Sign In</ButtonText>
            {/* trocar para a activy indicator after onpress */}
          </Button>
        </Form>
        <Text style={styles.slideModal}></Text>
      </Modal>
    </Container>
  )
}

const styles = StyleSheet.create({
  rememberArea: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  remember: {
    color: '#fff',
    fontSize: 18
  }
})