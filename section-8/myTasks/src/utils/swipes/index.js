import { StyleSheet, View, Text } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import firebase from '../../services/firebase_connection'

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

const swipeFromRightOpen = async (item, user) => {
  await firebase.database().ref('tasks').child(user).child(item.id).remove()
    .catch((error) => alert("Internal error, try again later. :("))
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