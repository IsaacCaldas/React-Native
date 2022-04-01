import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';

export default function App() {

  [phrase, setPhrase] = useState([])
  
  let phrases = [
      'Aprenda a aceitar seus defeitos, pois assim poderá ver o brilho das suas qualidades!',
      'Nem toda experiência da vida será bom, aprenda com os maus dias também.',
      'Interessante seria se todos pensassem como eu, mas se todos fossem eu para que os outros?',
      'Nunca se compare aos outros, você deve ser sua própria régua.'
    ]

  return (
    <View style={styles.container}>
      <Image
        source={require('./src/biscoito.png')}
        style={styles.img}
      />
      <Text style={styles.phrase}>"{this.state.phrase}"</Text>

      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonArea}>
          <Text style={styles.buttonText}>Break the cookie</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    width: 250,
    height: 250
  },
  phrase:{
    fontSize: 20,
    color: `#dd7b22`,
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  button: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  buttonArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
});
