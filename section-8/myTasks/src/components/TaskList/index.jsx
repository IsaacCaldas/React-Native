import { useState, useEffect } from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import Swipeable from 'react-native-gesture-handler/Swipeable'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { Separator, rightSwipeActions, swipeFromRightOpen } from '../../utils/swipes'

export default function TaskList({task}) {

  const [tasks, setTasks] = useState()

  // useEffect(()=>{
  // }, [])

  // useEffect(()=>{
  // }, [task])

  return (
    <View style={styles.container}>
      <FlatList
        data={task}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <Task item={item} />}
        ItemSeparatorComponent={() => <Separator />}
      />
    </View>
  )
}

export function Task({item}) {
  // const [checked, setChecked] = useState(false)

  return (
    <Swipeable
      renderRightActions={rightSwipeActions}
      onSwipeableRightOpen={swipeFromRightOpen}
    >
      <View style={styles.item}>
        <TouchableOpacity 
          style={styles.checkboxArea} 
          onPress={() => setChecked(!checked)}
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