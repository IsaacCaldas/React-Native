import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Routes from './src/routes/app.routes'
import Reducers from './redux/reducers/reducers_config'

export default function App() {

  const store = createStore(Reducers)

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor="#2aa444" barStyle="light-content" />
        <Routes/>
      </NavigationContainer>
    </Provider>
  )
}