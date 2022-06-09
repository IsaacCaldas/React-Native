import { Animated } from 'react-native'

export {
  magicSide
}

function labelUp(side_one, side_two) {
  Animated.parallel([
    Animated.timing(side_one, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true
    }),
    Animated.timing(side_two, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true
    })
  ]).start()
}

function magicSide(side) {
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
    // topSide(sides.top_side),
    // leftSide(sides.left_side)
    Animated.timing(sides[0].prop, {
      toValue: sides[0].value,
      duration: sides[0].duration,
      useNativeDriver: true
    }),
    Animated.timing(sides[1].prop, {
      toValue: sides[1].value,
      duration: sides[1].duration,
      useNativeDriver: true
    })
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
  console.log("TOP:", top_side)
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
  console.log("RIGHT:", right_side)
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
  console.log("BOTTOM:", bottom_side)
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
  console.log("LEFT:",left_side)
  if(left_side) {
    const { prop, value, duration } = left_side
    return Animated.timing(prop, {
      toValue: value,
      duration: duration,
      useNativeDriver: true
    })
  }
}
