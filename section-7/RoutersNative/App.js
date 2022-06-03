import { useState, useEffect } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './src/pages/Home'
import About from './src/pages/About'
import Contacts from './src/pages/Contacts'

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} 
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: '#3abaaa',
              height: 50
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 18
            },
          }}
        />

        <Stack.Screen name="About" component={About} 
          options={{
            title: 'About me',
            headerStyle: {
              backgroundColor: '#3abaaa',
              height: 50
            }
          }}
        />

        <Stack.Screen name="Contacts" component={Contacts} 
          options={{
            title: 'Contacts',
            headerStyle: {
              backgroundColor: '#3abaaa',
              height: 50
            },
            headerTintColor: '#fff'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
