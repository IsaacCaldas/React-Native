import { useState, useEffect } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'

import Home from './src/pages/Home'
import About from './src/pages/About'
import Contacts from './src/pages/Contacts'

const Tab = createBottomTabNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#bf33a3',
          tabBarInactiveTintColor: '#ccc',
          tabBarStyle: {
            backgroundColor: '#333',
            shadowOffset: { width: 0, height: 0 },
            borderTopWidth: 0,
            shadowColor: '#000',
            shadowOpacity: 0.2,
            elevation: 5,
          }
        }}
      >
        <Tab.Screen name="Home" component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen name="About" component={About}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Feather name="info" color={color} size={size} />
            )
          }} 
        />
        <Tab.Screen name="Contacts" component={Contacts}
          options={{
            tabBarLabel: 'Contatos',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="contacts" color={"red"} size={size} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
