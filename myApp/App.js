import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      input: ''
    }

    this.login = this.login.bind(this)
  }

  login() {
    if (this.state.input === '') {
      alert('Say to me your name.')
      return;
    }
    
    this.setState({name: 'Welcome ' + this.state.input}) 
  }
 
  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.input}
          placeholder="What's your name?"
          underlineColorAndroid='transparent'
          onChangeText={(name) => this.setState({input: name})}
        />

        <Button title='Login' onPress={this.login} />

        <Text style={styles.text}>
          {this.state.name}
        </Text>
      </View>
    );
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111',
    flex: 1,
  },
  input: {
    backgroundColor: '#eee',
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    fontSize: 20,
    margin: 20,
    padding: 5
  },
  text: {
    color: '#44ff',
    fontWeight: 'bold',
    fontSize: 30,
    margin: 20,
  }
});
