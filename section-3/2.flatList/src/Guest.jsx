import { StyleSheet, Text, View } from 'react-native';

export default function Guest(item) {
  return (
    <View style={styles.guestCard}>
      <Text style={styles.guestText}>Name: {item.name}</Text>
      <Text style={styles.guestText}>Age: {item.age}</Text>
      <Text style={styles.guestText}>Email: {item.email}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  guestCard: {
    backgroundColor: '#222',
    height: 200,
    width: '100vw',
    marginBottom: 15,
  },
  guestText: {
    color: '#fff',
    fontSize: 20,
  }
});
