import { StyleSheet, Text, View } from 'react-native';

export default function Users({ data }) {
  return (
    <View style={styles.userArea}>
      <Text style={styles.user_name}>Name: {data.name}</Text>
      <Text style={styles.user_age}>Age: {data.age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  userArea: {
    width: '100%',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginTop: 10,
  },
  user_name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ccc'
  },
  user_age: {
    fontSize: 15,
    color: '#ccc',
    marginTop: 3,
    marginBottom: 10
  }
});
