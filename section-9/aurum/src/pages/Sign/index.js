import { useEffect, useState, useRef } from 'react'
import { StyleSheet, View, Text, ActivityIndicator, Animated } from 'react-native'
import { Container, Modal, Logo, Form,
         InputArea, Input, CheckBox, Button, 
         ButtonText } from '../../styles/styleds'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { magicSide } from '../../utils/animations/magicSides'

export default function Sign() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checked, setChecked] = useState(false)
  const [focus, setFocus] = useState(false)

  const top = useRef(new Animated.Value(0)).current
  const topValue = top.interpolate({
    inputRange: [0, 1],
    outputRange: ['30px', '0px']
  })
  const right = useRef(new Animated.Value(0)).current
  const rightValue = right.interpolate({
    inputRange: [0, 1],
    outputRange: ['-10px', '0px']
  })
  const bottom = useRef(new Animated.Value(10)).current
  const bottomValue = bottom.interpolate({
    inputRange: [0, 1],
    outputRange: ['-30px', '0px']
  })
  const left = useRef(new Animated.Value(10)).current
  const leftValue = left.interpolate({
    inputRange: [0, 1],
    outputRange: ['10px', '0px']
  })


  useEffect(() => {
    let side = []
    
    if (email || focus ){
      side = {
        parallel: true,
        sides: {
          top_side: {prop: top, value: 1, duration: 100},
          left_side: {prop: left, value: 1,  duration: 100}
        }
      }
      magicSide(side)

    } else {
      side = {
        parallel: true,
        sides: {
          top_side: {prop: top, value: 0, duration: 100},
          left_side: {prop: left, value: 0,  duration: 100}
        }
      }
      magicSide(side)
    }
  }, [email, focus]) 

  

  return (
    <Container>
      <Modal>
        <Logo source={require('../../images/aurum_coin.png')}/>
        <Form>
          <InputArea>
            <Animated.Text 
              style={{
                position: 'relative',
                top: topValue, left: leftValue, 
                fontSize: focus || email ? 13 : 16,
                color: focus || email ? "#fff" : "#aaa"
            }}>
              {email || focus ? 'Email' : 'Enter your email'}
            </Animated.Text>
            <Input 
              autoCorrect={false}
              autoCapitalize="none"
              value={email}
              onFocus={() => setFocus(!focus)}
              onBlur={() => setFocus(!focus)}
              onChangeText={(text) => setEmail(text)}
            />
          </InputArea>
          <InputArea>
            <Animated.Text 
              style={{
                position: 'relative',
                top: topValue, left: leftValue, 
                fontSize: password || focus ? 13 : 16,
                color: password || focus ? "#fff" : "#aaa"
            }}>
              {password || focus ? 'Password' : 'Enter your password'}
            </Animated.Text>
            <Input 
              autoCorrect={false}
              autoCapitalize="none"
              value={password}
              onFocus={() => setFocus(!focus)}
              onBlur={() => setFocus(!focus)}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
            />
          </InputArea>
          <View style={styles.rememberArea}>
            <CheckBox 
              bgColor={checked ? '#2aa444' : 'transparent' }
              borderColor={checked ? '#2aa444' : '#fff' }
              onPress={() => setChecked(!checked)}
            >
              { checked &&
                <FontAwesome
                  name="check"
                  size={13}
                  color="#fff"
                />
              }
            </CheckBox>
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