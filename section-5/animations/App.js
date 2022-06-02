import { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated, Easing, TouchableOpacity } from 'react-native';

export default function App() {

  const [booleanTruth, setBool] = useState(false);

  // const anmWidth = useRef(new Animated.Value(150)).current
  // const anmHeight = useRef(new Animated.Value(50)).current
  const anmScale = useRef(new Animated.Value(1)).current
  const anmText = useRef(new Animated.Value(18)).current
  const anmOpacity = useRef(new Animated.Value(1)).current

  const spin = useRef(new Animated.Value(0)).current
  const spinValue = spin.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '36000deg']
  })

  // useEffect(() => { 
  //   Animated.sequence([
  //     Animated.timing(anmOpacity, {
  //       toValue: 1,
  //       duration: 1000
  //     }),
  //     Animated.parallel([
  //       Animated.timing(anmWidth, {
  //         toValue: 250,
  //         duration: 2000
  //       }),
  //       Animated.timing(anmHeight, {
  //         toValue: 100,
  //         duration: 2000
  //       }),
  //       Animated.timing(spinValue, {
  //         toValue: 1,
  //         duration: 2000,
  //         easing: Easing.linear,
  //         useNativeDriver: true
  //       }),
  //       Animated.timing(anmText, {
  //         toValue: 22,
  //         duration: 2000
  //       })
  //     ]),
  //     Animated.timing(anmOpacity, {
  //       toValue: 0,
  //       duration: 2000
  //     })
  //   ]).start()
  // }, [])

  useEffect(() => {

    if(booleanTruth) {
      Spinner()
      Resize()
    }
  }, [booleanTruth])

  function Spinner(){
    Animated.loop(
      Animated.timing(spin, {
        toValue: 1,
        duration: 360000,
        easing: Easing.linear,
        useNativeDriver: true
      })
    ).start()
  }

  function Resize() {
    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(anmScale, {
            toValue: 1.3,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true
          }),
          Animated.timing(anmText, {
            toValue: 22,
            duration: 750
          })
        ]),
        Animated.parallel([
          Animated.timing(anmScale, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true
          }),
          Animated.timing(anmText, {
            toValue: 18,
            duration: 750
          })
        ])
      ])
    ).start()
  }

  return (
    <View style={styles.container}>

      <View style={{marginBottom: 50}}>
        <TouchableOpacity
          onPress={() => setBool(!booleanTruth)}
          style={{width: 100, height: 100, backgroundColor: '#f00', justifyContent: 'center', alignItems: 'center', borderRadius: 50, fontWeight: 'bold'}}
        >
          <Text style={{color: '#fff', fontSize: 18}}>Animate!</Text>
        </TouchableOpacity>
      </View>

      <Animated.View style={{width: 100, height: 100, backgroundColor: "#eee", transform: [{rotate: spinValue}], borderRadius: 50, borderColor: "#aa2b32", borderWidth: 5, borderStyle: 'dashed'}}>
      </Animated.View>

      <Animated.View style={{backgroundColor: "#a3b8a2", justifyContent: "center", transform: [{scale: anmScale}], width: 150, height: 50, marginTop: 20}}>
      
       {/* borderRadius: 75, opacity: anmOpacity}}> */}
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
