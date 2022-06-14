import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux'

export default function Home() {

  const auth = useSelector((state) => state)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Oi {auth[0].email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  text: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
  }
});
