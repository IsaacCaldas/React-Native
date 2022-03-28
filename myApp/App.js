import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }

    this.login = this.login.bind(this)

  }

  login(name) {
    this.setState({
      name
    })
  }
  
  render() {

    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>Hello <b>{this.state.name}</b>!</Text>
        <Button title='Login' onPress={() => this.login('Isaac')} />
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
});
