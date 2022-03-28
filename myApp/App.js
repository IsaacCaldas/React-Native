import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

class App extends Component {

  render() {

    return (
      <View style={styles.container}>
        
        <Text style={styles.firstText}>I am the first text.</Text>
        <Text style={styles.secondText}>I am the second text.</Text>
        <Text style={styles.thirdText}>I am the third text.</Text>

      </View>
    );
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstText: {
    fontSize: 30,
  },
  secondText: {
    color: 'blue',
    margin: 30
  },
  thirdText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'brown'
  },
});
