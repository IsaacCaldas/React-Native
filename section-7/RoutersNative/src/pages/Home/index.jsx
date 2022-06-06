import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Home() {

  const navigation = useNavigation()

  function goToDetails() {
    navigation.navigate('Details')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Page</Text>
      <Button title="Go to Details" onPress={goToDetails} />
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
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