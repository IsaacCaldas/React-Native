import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
class App extends Component {

  render() {

    return (
      <View style={styles.container}>
        <View style={{width: 50, height: 50, backgroundColor: 'red'}}></View>
        <View style={{width: 50, height: 50, backgroundColor: 'yellow'}}></View>
        <View style={{width: 50, height: 50, backgroundColor: 'blue'}}></View>
      </View>
    );
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
});
