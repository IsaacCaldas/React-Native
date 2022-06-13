import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../pages/Home'
import NewRegister from '../pages/NewRegister'
import Profile from '../pages/Profile'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Tab = createBottomTabNavigator()

export default function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#2aa444',
        tabBarInactiveTintColor: '#ccc',
        tabBarStyle: {
          backgroundColor: '#222',
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
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-home" color={color} size={20}/>
          ) 
        }}
      />
      <Tab.Screen name="Register" component={NewRegister}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="pluscircle" color={color} size={25} />
        }}
      />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="user" color={color} size={20} />
        }}
      />
    </Tab.Navigator>
  )
}