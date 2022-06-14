import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Sign from '../Sign'
import SignIn from '../SignIn'
import SignUp from '../SignUp'
import Home from '../Home'

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sign" component={Sign}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="SignIn" component={SignIn}/>
      <Stack.Screen name="SignUp" component={SignUp}/>
      <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
  )
}