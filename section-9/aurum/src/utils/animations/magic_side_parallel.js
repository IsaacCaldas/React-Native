import { Animated } from 'react-native'

export default function magicSideParallel(
  side_one = null,
  side_two = null,  
  side_three = null,
  side_four = null
) {

  return Animated.parallel([
    sideMoving(side_one),
    sideMoving(side_two),
    sideMoving(side_three),
    sideMoving(side_four)
  ]).start()
}

function sideMoving(side) {
  if(side){
    const { prop, value, duration } = side
    return Animated.timing(prop, {
      toValue: value,
      duration: duration,
      useNativeDriver: true
    })
  }
}
