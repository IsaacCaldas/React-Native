import { StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native'

export default function Button({name, isNewUser}) {

  // name - props / Save || Sign In

  return (
    <TouchableOpacity style={styles.button} onPress={() => isNewUser ? signUp() : signIn()}>
      {load ?  
          <ActivityIndicator size="small" color="#fff" />
        : 
          <Text style={styles.buttonText}>{ name }</Text>
      }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 40,
    borderColor: '#c33333',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    color: '#fff',
    backgroundColor: '#333'
  },
  button: {
    backgroundColor: '#c33333',
    width: "100%",
    padding: 10,
    marginTop: 10,
    marginBottom: 5,
    borderRadius: 5,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
})