import { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'

import { Content, Section, Title, CashHistory, Incoming, Outcoming } from '../../styles/styleds'

import Header from '../../components/Header'

import { AuthContext } from '../../contexts/auth'

export default function NewRegister() {

  const { user } = useContext(AuthContext)

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
      <Section>
        <View>
          <Text style={styles.name}>{user.name} balance</Text>
          <Title>R$ {user.balance || '0,00'}</Title>
        </View>
        <CashHistory>
          <Outcoming>
            <Text>10,00</Text>
          </Outcoming>
          <Incoming>
            <Text>R$ 15,50</Text>
          </Incoming>
        </CashHistory>
      </Section>
    </Content>
  )
}

const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    color: '#ddd'
  }
})  