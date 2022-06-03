import { useLayoutEffect } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function About() {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Page</Text>
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