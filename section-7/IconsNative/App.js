import { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'

export default function App() {
  return (
    <View style={styles.container}>
      <FontAwesome 
        name="rocket"
        size={35}
        color="red"
      />
      <FontAwesome
        name="arrow-right"
        size={35}
        color="green"
      />
      <Feather
        name="arrow-right"
        size={35}
        color="blue"
      />
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
})
