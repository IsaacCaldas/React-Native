import { useLayoutEffect } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation, useRoute, StackActions } from '@react-navigation/native'

export default function Contacts() {

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

  function handleHome(){
    // pop: return 1 level
    // navigation.dispatch(StackActions.pop())
    // popToTop: return to root
    navigation.dispatch(StackActions.popToTop())
  }

  return (
    <View style={styles.container}>
      <Text>{route.params?.name}</Text>
      <Text>{route.params?.email}</Text>
      <Text style={styles.text}>Contacts</Text>
      <Button 
        title="Go to Home"
        onPress={() => toHome()}
      />
      <Button 
        title="Go Back 1 level"
        onPress={() => navigation.goBack()} 
      />
      {/* navigation.goBack(): Returns 1 route back */}
      <Button 
        title="Go Back Home"
        onPress={() => handleHome()} 
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