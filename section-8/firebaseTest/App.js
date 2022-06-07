import { StyleSheet, View } from 'react-native';
import SignInUp from './src/pages/SignInUp';

export default function App() {

  return (
    <View style={styles.container}>
      <SignInUp />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20
  }
})
