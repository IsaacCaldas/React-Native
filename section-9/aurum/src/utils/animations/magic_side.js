import { Animated } from 'react-native'

export default function magicSide(
  parallel, 
  side_one = null,
  side_two = null,  
  side_three = null,
  side_four = null
) {
  if (parallel) {
    let animated_method = 'sequence'
    return magicSideParallel(animated_method, side_one, side_two, side_three, side_four)
  } else {
    return magicSideSequence(side_one, side_two, side_three, side_four)
  }
}

function magicSideParallel(animated_method, side_one, side_two, side_three, side_four) {
  return Animated[animated_method](callSides(
    side_one, side_two, side_three, side_four
  )).start()
}
function magicSideSequence(side_one, side_two, side_three, side_four) {
  return Animated.sequence(callSides(
    side_one, side_two, side_three, side_four
  )).start()
}

function callSides(side_one, side_two, side_three, side_four) {
  return [
    sideMoving(side_one),
    sideMoving(side_two),
    sideMoving(side_three),
    sideMoving(side_four)
  ]
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
