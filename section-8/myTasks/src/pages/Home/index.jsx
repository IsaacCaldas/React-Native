import { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, View, Text, ActivityIndicator, TextInput, TouchableOpacity, Keyboard } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import firebase from '../../services/firebase_connection'
import AntDesign from 'react-native-vector-icons/AntDesign'

import TaskList from '../../components/TaskList'

export default function Home() {

  const route = useRoute();
  const navigation = useNavigation()

  const [user, setUser] = useState()
  const [load, setLoad] = useState(false)
  const [newTask, setNewTask] = useState()

  async function signOut() {
    await firebase.auth().signOut()
      .then(() => {
        navigation.navigate('SignInUp')
      }).catch((error) => {
        serverError()
      });
  }

  useEffect(() => {
    getUser()
  }, [])

  async function getUser() {
    await firebase.database().ref('users').child(route.params.user).on('value', (snapshot) => {
      let user = {
        name: snapshot.val().name,
        email: snapshot.val().email
      }
      setUser(user)
      setLoad(true)
    })
  }

  function addNewTask() {
    
    if (!newTask) {
      return
    } else {
      let taskChild = firebase.database().ref('tasks').child(route.params.user)
      let key = taskChild.push().key

      taskChild.child(key).set({
        name: newTask,
        checked: false

      }).catch((error) => {
        alert("Internal error, try again later. :(")
      })
    }
    setNewTask("")
    Keyboard.dismiss()
    return
  }

  return (
    <SafeAreaView style={styles.container}>
      { user && load ? 
        <View style={styles.task}>
          <View style={styles.userArea}>
            <Text style={styles.userAreaText}>
              <View style={styles.userStatus}/> {user.name}
            </Text>
            <AntDesign
              name="logout"
              size={18}
              color="#eee"
              onPress={() => signOut()}
            />
          </View>
          <View style={styles.mainContent}>
            <Text style={styles.title}>
              my<Text style={styles.titleTask}>Tasks</Text>
            </Text>

            <View style={styles.inputArea}>
              <TextInput
                style={styles.input}
                placeholder="Enter a new task to do"
                onChangeText={(text) => setNewTask(text)}
                value={newTask}
                placeholderTextColor="#666"
              />
              <TouchableOpacity style={styles.button} onPress={() => addNewTask()}>
                <AntDesign
                  name="pluscircleo"
                  size={30}
                  color="#eee"
                />
              </TouchableOpacity>
            </View>
            <TaskList user={route.params.user}/>
          </View>
        </View>
      :
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#c33333" />
        </View>
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#222'
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  task: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  userArea: {
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#444',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  userAreaText: {
    color: '#eee',
    fontSize: 18,
    fontWeight: 'bold'
  },
  userStatus: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#3fa333',
    marginRight: 5
  },
  mainContent: {
    flex: 2,
    width: '100%',
    backgroundColor: '#444',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: "column"
  },
  title: {
    fontSize: 30,
    color: '#eee',
    textAlign: 'center'
  },
  titleTask: {
    color: '#c33333',
    fontWeight: 'bold'
  },
  inputArea: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10
  },  
  input: {
    width: "85%",
    height: 40,
    borderColor: '#c33333',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    color: '#fff',
    backgroundColor: '#333'
  },
  button: {
    alignItems: "center",
    justifyContent: "center"
  }
})