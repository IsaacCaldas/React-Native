import { StyleSheet, View, Image, TouchableOpacity, FlatList } from 'react-native';
import feed_data from './src/json/feed_data';
import FeedList from './src/components/Post';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require('./src/img/insta_logo.png')}
            style={styles.logo}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('./src/img/send.png')}
            style={styles.send}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        data={feed_data}
        renderItem={({ item }) => <FeedList data={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 55,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1
  },
  logo: {
    width: 170,
    height: 45
  },
  send: {
    width: 30,
    height: 30
  },
});
