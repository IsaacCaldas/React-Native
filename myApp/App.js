import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native';
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }

    this.getName = this.getName.bind(this)
  }

  getName(name) {
    name.length > 0 ? this.setState({name: 'Welcome ' + name}) : this.setState({name: ''})
  }
 
  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.input}
          placeholder="What's your name?"
          underlineColorAndroid='transparent'
          onChangeText={this.getName}
        />
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
