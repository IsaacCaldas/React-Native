import { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';

export default function App() {

  const anmWidth = useRef(new Animated.Value(150)).current
  const anmHeight = useRef(new Animated.Value(50)).current
  const anmText = useRef(new Animated.Value(11)).current

  const spinValue = useRef(new Animated.Value(0)).current

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '1800deg']
  })

  useEffect(() => {
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true
    }).start()
  }, [])

  useEffect(() => {
    Animated.timing(anmWidth, {
      toValue: 250,
      duration: 1000
    }).start()
  }, [])

  useEffect(() => {
    Animated.timing(anmHeight, {
      toValue: 100,
      duration: 1000
    }).start()
  }, [])

  useEffect(() => {
    Animated.timing(anmText, {
      toValue: 22,
      duration: 1000
    }).start()
  }, [])

  return (
    <View style={styles.container}>

      <Animated.View style={{width: anmWidth, height: anmHeight, backgroundColor: "#a3b8a2", justifyContent: "center", transform: [{rotate: spin}], borderRadius: 75}}>
        <Animated.Text style={{color: "#fff", fontSize: anmText, textAlign: 'center'}}>
          Loading...
        </Animated.Text>
      </Animated.View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
