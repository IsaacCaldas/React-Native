import { useState, useEffect } from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import Swipeable from 'react-native-gesture-handler/Swipeable'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { Separator, rightSwipeActions, swipeFromRightOpen } from '../../utils/swipes'

import firebase from '../../services/firebase_connection'

export default function TaskList({user}) {

  const [tasks, setTasks] = useState()

  useEffect(()=>{
    getTasks()
  }, [user])

  async function getTasks() {

    await firebase.database().ref('tasks').child(user).on('value', (snapshot) => {
      setTasks([])

      snapshot?.forEach((childItem) => {
        let data = {
          id: childItem.key,
          name: childItem.val().name,
          checked: childItem.val().checked
        }
        setTasks(state => [...state, data])
      })
    })
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Task item={item} user={user} />}
        ItemSeparatorComponent={() => <Separator />}
      />
    </View>
  )
}

export function Task({item, user}) {
 
  async function setChecked(checked) {
    await firebase.database().ref('tasks').child(user).child(item.id).update({
      checked
    }).catch((error) => alert("Internal error, try again later. :("))
  }

  return (
    <Swipeable
      renderRightActions={rightSwipeActions}
      onSwipeableRightOpen={() => swipeFromRightOpen(item, user)}
    >
      <View style={styles.item}>
        <TouchableOpacity 
          style={styles.checkboxArea} 
          onPress={() => setChecked(!item.checked)}
        >
          {item.checked && 
            <View style={[styles.checkbox, item.checked && styles.checked]}>
              <FontAwesome
                name="check"
                size={15}
                color="#fff"
              />
            </View>
          }
          <Text style={[styles.itemText, item.checked && styles.textChecked]}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  itemSeparator: {
    flex: 1,
    height: 1,
    backgroundColor: '#32a3fd',
  },
  container: {
    flex: 1,
    width: '100%'
  },
  checkboxArea: {
    flexDirection: 'row'
  },
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: '100%',
    borderRadius: 6,
    marginBottom: 5,
    paddingHorizontal: 10,
    paddingVertical: 12,
    backgroundColor: '#222'
  },
  checkbox: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    borderColor: "#eee",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center", 
    marginRight: 10
  },
  checked: {
    backgroundColor: "#3fa333",
    borderColor: "#3fa333"
  },
  itemText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  }, 
  textChecked: {
    textDecorationLine: "line-through",
    color: "#bbb",
    fontWeight: "normal"
  }
})