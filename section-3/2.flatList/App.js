import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  
  // Flatlist: only render items that are visible on screen, is to feed, contact list, etc.
  const feed = [
    {id: 0, name: 'Isaac Caldas', age: 18, email: 'isaacdev@gmail.com'},
    {id: 1, name: 'João Pedro', age: 19, email: 'joao.pedro@gmail.com'},
    {id: 2, name: 'Maria', age: 20, email: 'maria@gmail.com'},
    {id: 3, name: 'Pedro', age: 21, email: 'pedro@gmail.com'},
    {id: 4, name: 'João', age: 22, email: 'joao@gmail.com'},
    {id: 5, name: 'John Doe', age: 23, email: 'john.doe@gmail.com'},
    {id: 6, name: 'Karla', age: 24, email: 'karla@gmail.com'},
    {id: 7, name: 'Jimmy', age: 25, email: 'jim@gmail.com'} 
  ]

  return (
    <View style={styles.container}>
      <FlatList 
        data={feed}
        keyExtractor={ (item) => item.id }
        renderItem={ ({item}) => <Guest item={item} /> }
      />
    </View>
  );
}

function Guest(item) {
  return (
    <View style={styles.guestCard}>
      <Text style={styles.guestText}>Name: {item.name}</Text>
      <Text style={styles.guestText}>Age: {item.age}</Text>
      <Text style={styles.guestText}>Email: {item.email}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
