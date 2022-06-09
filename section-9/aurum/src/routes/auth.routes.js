import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Sign from '../pages/Sign'

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <AuthStack.Screen name="Sign" component={Sign}/>
    </AuthStack.Navigator>
  )
}