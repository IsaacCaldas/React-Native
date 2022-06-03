import { useLayoutEffect } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function About() {

  const navigation = useNavigation()
  const route = useRoute()

  function toHome() {
    navigation.navigate('Home')
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.name === '' ? 'About' : route.params?.name,
    })
  }, [navigation])

  return (
    <View style={styles.container}>
      <Text>{route.params?.name}</Text>
      <Text>{route.params?.email}</Text>
      <Text style={styles.text}>About Page</Text>
      <Button 
        title="Go to Home"
        onPress={() => toHome()}
      />
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