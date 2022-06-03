import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'

export default function About() {

  const navigation = useNavigation()
  const route = useRoute()

  function toHome() {
    navigation.navigate('Home')
  }


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