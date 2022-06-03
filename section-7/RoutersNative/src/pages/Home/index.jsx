import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Home() {

  const navigation = useNavigation()

  function toAbout() {
    navigation.navigate('About', { 
      name: 'Isaac Caldas',
      email: 'isaac@dev.com'
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Page</Text>
      <Button 
        title="Go to About"
        onPress={() => toAbout()}
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