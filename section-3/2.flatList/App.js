import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

export default function App() {

  const [value, setValue] = useState(30);

  return (
    <View style={styles.container}>
      <Slider
        minimumValue={0}
        maximumValue={100}
        onValueChange={(value) => setValue(value)}
        value={value}
        minimumTrackTintColor="#81D532"
        maximumTrackTintColor="#223ED5"
      />
      <Text style={{textAlign: 'center', fontSize: 25, marginBottom: 100}}>{value.toFixed(0)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
