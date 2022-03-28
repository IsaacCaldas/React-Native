import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

class App extends Component {
  render() {

    let name = 'Isaac'

    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
        <Guest name='Isaac' />
        <Text style={{ color: '#33FF', fontSize: 20 }}> {/* ou '20px' */}
          <b>{name}</b> is a programmer?
        </Text>
      </View>
    );
  }
}

class Guest extends Component {
  render() {
    let image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_f ont_awesome.svg/2048px-User_font_awesome.svg.png'
    return (
      <>
        <Image 
          source={{uri: image }}
          style={{ width: 40, height: 40, marginTop: 10 }}
        />
        <Text>{this.props.name}</Text>
      </>
    )

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
});
