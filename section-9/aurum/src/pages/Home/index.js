import { useContext } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { AuthContext } from '../../contexts/auth'

export default function Home() {

  const { user } = useContext(AuthContext)

  return (
    <View>
      <Text>Home</Text>
      <Text>Hello {user.name}</Text>
      <Text>Your balance {user.balance}</Text>
    </View>
  )

}