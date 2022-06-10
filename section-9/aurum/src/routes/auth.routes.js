import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Sign from '../pages/Sign'
import SignUp from '../pages/Sign/SignUp';

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <AuthStack.Screen name="SignIn" component={Sign}/>
      <AuthStack.Screen name="SignUp" component={SignUp}/>
    </AuthStack.Navigator>
  )
}