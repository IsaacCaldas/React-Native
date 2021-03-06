import { useEffect, useRef } from "react"
import { View, Animated, Keyboard } from 'react-native'
import { Input } from '../../styles/styleds'
import { magicSideParallel } from '../../utils/animations'

export default function InputArea({
  value,
  setValue,
  password,
  placeHolder
}){

  const top = useRef(new Animated.Value(0)).current
  const topValue = top.interpolate({
    inputRange: [0, 1],
    outputRange: ['30px', '-5px']
  })
  const left = useRef(new Animated.Value(0)).current
  const leftValue = left.interpolate({
    inputRange: [0, 1],
    outputRange: ['15px', '5px']
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

  useEffect(() => {
    let top_side = {
      prop: top,
      value: value ? 1 : 0,
      duration: 100
    }
    let left_side = {
      prop: left, 
      value: value ? 1 : 0,
      duration: 100
    }

    magicSideParallel(top_side, left_side)

  }, [value]) 

  return (
    <View>
      <Animated.Text 
        style={{
          position: 'relative',
          top: topValue, left: leftValue, 
          fontSize: value ? 13 : 16,
          color: value ? "#fff" : "#ccc"
      }}>
        {value ? placeHolder.entered : placeHolder.empty }
      </Animated.Text>
      <Input 
        autoCorrect={false}
        autoCapitalize="none"
        value={value}
        secureTextEntry={password}
        onBlur={() => Keyboard.dismiss()}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  )

}