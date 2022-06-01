import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (visibility) => setModalVisible(visibility)
  
  return (
    <View style={styles.container}>
      <Button 
        title='Open Modal'
        onPress={() => openModal(true)}
      />

      <Modal transparent={true} animationType='slide' visible={modalVisible}>
        <View style={{backgroundColor: "#292929", width: '100%', height: 250}}>
          <Button title='Close' onPress={() => openModal(false)} />
          <Text style={{color: "#FFF", fontSize: 25}}>Welcome</Text>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDD'
  },
});
