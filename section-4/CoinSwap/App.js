import { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native';
import Converter from './src/components/Converter';

export default function App() {
  return (
    <View style={styles.container}>
      <Converter firstCurrency="USD" secondCurrency="BRL"/>
      <Converter firstCurrency="EUR" secondCurrency="BRL"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
