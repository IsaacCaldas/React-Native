import { StyleSheet, View, Text } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Separator = () => <View style={styles.itemSeparator} />

const rightSwipeActions = () => {
  return (
    <View style={styles.rightSwipe}>
      <FontAwesome
        name="trash"
        size={20}
        color="#fff"
      />
    </View>
  )
}

const swipeFromRightOpen = () => {
  alert('Swipe from right');
}

export {  
  Separator,
  rightSwipeActions,
  swipeFromRightOpen
}

const styles = StyleSheet.create({
  itemSeparator: {
    flex: 1,
    height: 1
  },
  rightSwipe: {
    flex: 1,
    backgroundColor: '#c33333',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 15,
    borderRadius: 6,
    height: "90%"
  }
})