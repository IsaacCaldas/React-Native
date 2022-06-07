import { useState, useEffect } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { useRoute } from "@react-navigation/native";

import firebase from '../services/firebase_connection'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { useNavigation } from '@react-navigation/native'

export default function Home() {

  const route = useRoute();
  const navigation = useNavigation()

  const [user, setUser] = useState()
  const [load, setLoad] = useState(false)

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

  return (
    <>
      { user && load ? 
        <View style={styles.container}>
          <View style={styles.userArea}>
            <Text style={styles.userAreaText}>
              {user.email} <View style={styles.userStatus}/>
            </Text>
            <AntDesign
              name="logout"
              size={18}
              color="#eee"
              onPress={() => signOut()}
            />
          </View>
          <View style={styles.welcomeArea}>
            <Text style={styles.welcome}>
              Welcome to React Native 
              <Text style={styles.userWelcome}>
                {user.name}
              </Text>
              !
            </Text>
          </View>
        </View>
      :
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#a23d4b" />
        </View>
      }
    </>
  )
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
    width: '100%'
  },
  container: {
    flex: 1,
    width: '100%',
    height: 500,
    backgroundColor: '#222',
    alignItems: 'center',
    padding: 20
  },
  userArea: {
    width: '95%',
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
    marginLeft: 5
  },
  welcomeArea: {
    width: '95%',
    backgroundColor: '#444',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textJustify: 'justify',
    wordBreak: 'break-all'
  },
  welcome: {
    fontSize: 30,
    color: '#eee'
  },
  userWelcome: {
    fontSize: 30,
    color: '#c33333',
    fontWeight: 'bold',
    marginLeft: 10  
  }
})