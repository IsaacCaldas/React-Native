import { Animated } from 'react-native'

export default function magicSide(side) {
  if(side) {
    if (side.parallel) {
      return magicSideParallel(side.sides)
    } else {
      return magicSideSequence(side.sides)
    }
  }
}

function magicSideParallel(sides) {
  return Animated.parallel([
    topSide(sides.top_side),
    rightSide(sides.right_side),
    bottomSide(sides.bottom_side),
    leftSide(sides.left_side)
  ]).start()
}
function magicSideSequence(sides) {
  return Animated.sequence([
    topSide(sides.top_side),
    rightSide(sides.right_side),
    bottomSide(sides.bottom_side),
    leftSide(sides.left_side)
  ]).start()
}

function topSide(top_side) {
  if(top_side){
    const { prop, value, duration } = top_side
    return Animated.timing(prop, {
      toValue: value,
      duration: duration,
      useNativeDriver: true
    })
  }
}
function rightSide(right_side) {
  if(right_side) {
    const { prop, value, duration } = right_side
    return Animated.timing(prop, {
      toValue: value,
      duration: duration,
      useNativeDriver: true
    })
  }
}
function bottomSide(bottom_side) {
  if(bottom_side) {
    const { prop, value, duration } = bottom_side
    return Animated.timing(prop, {
      toValue: value,
      duration: duration,
      useNativeDriver: true
    })
  }
}
function leftSide(left_side) {
  if(left_side) {
    const { prop, value, duration } = left_side
    return Animated.timing(prop, {
      toValue: value,
      duration: duration,
      useNativeDriver: true
    })
  }
}
