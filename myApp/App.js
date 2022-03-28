import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
class App extends Component {

  render() {

    return (
      <View style={styles.container}>
        <View style={{flex: 1, backgroundColor: 'red'}}></View>
        <View style={{flex: 2, backgroundColor: 'yellow'}}></View>
        <View style={{flex: 1, backgroundColor: 'blue'}}></View>
      </View>
    );
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  }
});
