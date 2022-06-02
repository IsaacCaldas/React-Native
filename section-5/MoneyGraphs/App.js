import { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated, Easing } from 'react-native';

export default function App() {

  const [graph, setGraph] = useState(false);

  const monthMoney = [
    {id: 1, month: 'Jan', money: 2300},
    {id: 2, month: 'Feb', money: 2059},
    {id: 3, month: 'Mar', money: 1850},
    {id: 4, month: 'Apr', money: 2099},
    {id: 5, month: 'May', money: 1999},
    {id: 6, month: 'Jun', money: 1403},
    {id: 7, month: 'Jul', money: 1750},
    {id: 8, month: 'Aug', money: 1832},
    {id: 9, month: 'Sep', money: 1903},
    {id: 10, month: 'Oct', money: 2340},
    {id: 11, month: 'Nov', money: 2232},
    {id: 12, month: 'Dec', money: 2750}
  ]

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => setGraph(!graph)} style={styles.button}>
          <Text style={styles.buttonText}>Generate money graphic</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
        <View>
          {graph && <MoneyGraph/>}
        </View>
        <View style={{height: 20, backgroundColor: "#333"}} />
      </View>
    </View>
  );
}

export function MoneyGraph() {
  
  const anmHeight = useRef(new Animated.Value(0)).current
  const anmHeighta = useRef(new Animated.Value(0)).current

  useEffect(() => {
    animate()
  }, [])
  

  function animate() {
    Animated.timing(anmHeight, {
      toValue: 1000,
      duration: 1000,
      useNativeDriver: true
    }).start()
    Animated.timing(anmHeighta, {
      toValue: 122,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }

  return (
    <View style={{flexDirection: "row", flex: 1}}>
      <View>
        <Text>R$ 1600,00</Text>
        <Animated.View key={1} style={{width: 30, height: anmHeight, backgroundColor: "#32a2da"}}>
        </Animated.View>
      </View>
      <View>
        <Text>R$ 1300,00</Text>
        <Animated.View key={2} style={{width: 30, height: anmHeighta, backgroundColor: "#af333a"}}>
        </Animated.View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  button: {
    height: 50,
    backgroundColor: '#d2af33',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
});
