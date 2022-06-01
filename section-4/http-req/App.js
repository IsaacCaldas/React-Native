import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';

import api from './src/services/api';

export default function App() {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMovies()
  }, [])

  async function fetchMovies() {
    const response = await api.get('r-api/?api=filmes')
    response && setMovies(response.data)
    setLoading(false)
  }

  function load() {
    return (
      <View style={styles.load}>
        <ActivityIndicator size="large" color="#adbd33" />
        {/* <Image
          source={require('./src/images/loading.gif')}
          style={styles.loadGif}
        /> */}
      </View>
    )
  }
  
  function renderMovies() {
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

  return loading ? load() : renderMovies()
}

export function MovieBox({movie}) {
  return ( 
    <View style={styles.movieBox}>
      <Text style={styles.title}>{movie.nome}</Text>
      <Image 
        source={{uri: movie.foto}}
        style={styles.image}
      />
      <View style={styles.areaButton}>
        <TouchableOpacity style={styles.button} onPress={() => alert(movie.nome)}>
          <Text style={styles.textButton}>Read more</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.synopsis}>{movie.sinopse}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
  },
  load: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center'
  },  
  loadGif: {
    width: 100,
    height: 100
  },  
  movieBox: {
    width: '100%',
    padding: 20,
    height: 'auto',
    marginBottom: 20,
    backgroundColor: '#222',
    shadowColor: '#444',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3
  },
  title: {
    fontSize: 20,
    color: '#eee',
    fontWeight: 'bold',
    marginBottom: 10
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
    height: 250,
    zIndex: 2
  },
  areaButton: {
    alignItems: 'flex-end',
    marginTop: -40,
    zIndex: 9
  },
  button: {
    width: 100,
    backgroundColor: "#adbd33",
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  textButton: {
    textAlign: 'center',
    color: '#fff',
  }
});
