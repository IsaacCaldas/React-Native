import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

import api from './src/services/api';

export default function App() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetchMovies()
  }, [])

  async function fetchMovies() {
    const response = await api.get('r-api/?api=filmes')
    response && setMovies(response.data)
  }
  
  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <MovieBox movie={item} />}
      />
    </View>
  )
}

export function MovieBox({movie}) {
  return (
    <View style={styles.movieBox}>
      <Text style={styles.title}>{movie.nome}</Text>
      <View style={styles.info}>
        <Text style={styles.synopsis}>{movie.sinopse}</Text>
        <Image 
          source={{uri: movie.foto}}
          style={styles.image}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
  },
  movieBox: {
    width: '100%',
    padding: 20,
    height: 'auto',
    marginBottom: 20,
    backgroundColor: '#222'
  },
  title: {
    fontSize: 20,
    color: '#eee',
    fontWeight: 'bold'
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  synopsis: {
    color: '#ccc',
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10
  },
  image: {
    width: '120px',
    height: '120px',
    marginLeft: 15
  } 
});
