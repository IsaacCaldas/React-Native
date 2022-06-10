import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function AccountText({to, text, textButton}) {
  const navigation = useNavigation()

  return ( 
    <Text style={styles.account}>
      { text }
      <TouchableOpacity onPress={() => navigation.navigate(to)}>
        <Text style={styles.buttonText}>{ textButton }</Text>
      </TouchableOpacity>
    </Text>
  )
}

const styles = StyleSheet.create({
  account: {
    color: "#fff",
    fontSize: 15
  },
  buttonText: {
    marginLeft: 10,
    color: '#2aa444',
    fontSize: 15,
    fontWeight: 'bold'
  }
})