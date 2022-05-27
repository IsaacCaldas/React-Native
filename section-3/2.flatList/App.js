import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

export default function App() {

  const [value, setValue] = useState(false);

  return (
    <View style={styles.container}>
      <Switch
        value={value}
        onValueChange={(value) => setValue(value)}
        thumbColor='#f0ad4e'
        trackColor={{ false: '#ccc', true: '#f0ad4e' }}
      />
      <Text>{value ? 'On' : 'Off'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
