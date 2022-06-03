import { useLayoutEffect } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation, useRoute, StackActions } from '@react-navigation/native'

export default function Contacts() {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contacts</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 30,
    marginBottom: 20
  }
})