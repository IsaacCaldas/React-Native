import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function FeedList({data}) {

  const [feed, setFeed] = useState(data);

  return (  
    <View>
      <Text>FeedList</Text>
      <Text>{feed.name}</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});