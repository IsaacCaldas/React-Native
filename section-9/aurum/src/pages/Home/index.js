import { useContext, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { AuthContext } from '../../contexts/auth'
import { Container } from '../../styles/styleds'

export default function Home() {

  const { user, signOut } = useContext(AuthContext)


  return (
    <Container>
      <Text>Home</Text>
      <Text>Hello {user.name}</Text>
      <Text>Your balance {user.balance}</Text>
      <Text>Logout 
        <AntDesign
          name="logout"
          size={18}
          color="#222"
          onPress={() => signOut()}
        />
      </Text>
    </Container>
  )

}