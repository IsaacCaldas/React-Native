import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'

import stackRoutes from './stackRoutes'
import About from '../pages/About'
import Contacts from '../pages/Contacts'

const Tab = createBottomTabNavigator()

export default function Routes() {

  return (
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
      <Tab.Screen name="HomeStack" component={stackRoutes}
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
  )
}
