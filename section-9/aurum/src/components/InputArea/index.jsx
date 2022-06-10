import { useState, useEffect, useRef } from "react"
import { View, Text, Animated } from 'react-native'
import { Input } from '../../styles/styleds'
import { magicSide } from '../../utils/animations'

export default function InputArea({
  value,
  setValue,
  placeHolder
}){

  const [focus, setFocus] = useState(false)

  const top = useRef(new Animated.Value(0)).current
  const topValue = top.interpolate({
    inputRange: [0, 1],
    outputRange: ['30px', '0px']
  })
  // const right = useRef(new Animated.Value(0)).current
  // const rightValue = right.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: ['-10px', '0px']
  // })
  // const bottom = useRef(new Animated.Value(10)).current
  // const bottomValue = bottom.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: ['-30px', '0px']
  // })
  const left = useRef(new Animated.Value(0)).current
  const leftValue = left.interpolate({
    inputRange: [0, 1],
    outputRange: ['10px', '0px']
  })

  useEffect(() => {
    let parallel = true
    let top_side
    let left_side 

    if (value || focus ){
      top_side = {prop: top, value: 1, duration: 500}
      left_side = {prop: left, value: 1,  duration: 500}
    }
    else {
      top_side = {prop: top, value: 0, duration: 500}
      left_side = {prop: left, value: 0,  duration: 500}
    }

    magicSide(parallel, top_side, left_side)

  }, [value, focus]) 

  return (
    <View>
      <Animated.Text 
        style={{
          position: 'relative',
          top: topValue, left: leftValue, 
          fontSize: focus || value ? 13 : 16,
          color: focus || value ? "#fff" : "#aaa"
      }}>
        {value || focus ? placeHolder.entered : placeHolder.empty }
      </Animated.Text>
      <Input 
        autoCorrect={false}
        autoCapitalize="none"
        value={value}
        onFocus={() => setFocus(!focus)}
        onBlur={() => setFocus(!focus)}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  )

}