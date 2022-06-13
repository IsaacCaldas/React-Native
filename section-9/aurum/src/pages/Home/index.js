import { useContext, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { AuthContext } from '../../contexts/auth'
import { Container } from '../../styles/styleds'

export default function Home() {

  const { user, signOut } = useContext(AuthContext)

  return (
    <Container>
      <Text style={styles.text}>Home</Text>
      <Text style={styles.text}>Hello {user.name}</Text>
      <Text style={styles.text}>Your balance {user.balance || 0}</Text>
      <Text style={styles.text}>Logout 
        <AntDesign
          name="logout"
          size={18}
          color="#a33333"
          onPress={() => signOut()}
        />
      </Text>
    </Container>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#eee',
    fontSize: 16
  }
})