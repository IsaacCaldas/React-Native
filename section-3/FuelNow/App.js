import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Image, Button, Modal } from 'react-native';

export default function App() {

  const [ethanolPrice, setEthanolPrice] = useState()
  const [gasolinePrice, setGasolinePrice] = useState()
  const [ethlPerGaso, setEthlPerGaso] = useState(0)

  const [modalVisibility, setModalVisibility] = useState(false)

  function calculate() {
    if (!ethanolPrice || !gasolinePrice) {
      alert('Enter all prices')
      return
    }
    setEthlPerGaso(ethanolPrice / gasolinePrice)
    setModalVisibility(true)
  }

  const isNum = (text) => isNaN(text) ? false : true

  function verifyEthanolPrice(text) {
    let num = isNum(text)
    num && setEthanolPrice(text)
  }

  function verifyGasolinePrice(text) {
    let num = isNum(text)
    num && setGasolinePrice(text)
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.areaImage}>
        <Image
          source={require('./src/images/fuel_bomb.png')}
          style={styles.image}
        />
      </View>
      <Text style={[styles.text, styles.textTitle]}>Which pays more?</Text>
      <View style={styles.formArea}>
        <View>
          <Text style={styles.text}>Ethanol (price/L)</Text>
          <TextInput 
            style={styles.input}
            placeholder="Enter the ethanol price"
            value={ethanolPrice}
            onChangeText={(text) => verifyEthanolPrice(text)}
          />
          <Text style={styles.text}>Gasoline (price/L)</Text>
          <TextInput 
            style={styles.input}
            placeholder="Enter the gasoline price"
            value={gasolinePrice}
            onChangeText={(text) => verifyGasolinePrice(text)}
          />
        </View>
        <Button
          title='Calculate'
          onPress={() => calculate()}
        />
      </View>

      <Modal visible={modalVisibility} animationType='slide'>
        <View style={styles.modalView}>
          <View style={styles.areaImage}>
            <Image
              source={require('./src/images/fueled.png')}
              style={styles.image}
            />
          </View>
          <Text style={[styles.textModal, styles.textTitle]}>
            {ethlPerGaso < 0.7 ? 'Ethanol' : 'Gasoline'} pays off!
          </Text>
          <View style={styles.formArea}>
            <Text style={[styles.text, styles.textTitle]}>With this prices</Text>
            <Text style={styles.text}>Ethanol R$ {ethanolPrice}/L</Text>
            <Text style={styles.text}>Gasoline R$ {gasolinePrice}/L</Text>
            <Button title='New calculate' onPress={() => setModalVisibility(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    color: '#eee',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  },
  modalView: {
    flex: 1,
    backgroundColor: '#222',
    color: '#eee',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  },  
  areaImage: {
    width: 200,
    height: 200,
    backgroundColor: '#eee',
    borderRadius: 100,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25
  },
  image: {
    width: 140,
    height: 140
  },
  textTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20
  },
  text: {
    color: '#eee',
    fontSize: 20,
    marginBottom: 10
  },
  textModal: {
    color: '#11aa1a',
  },
  formArea: {
    width: '100%',
    flexDirection: 'column'
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#555',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#444",
    color: "#eee",
    fontSize: 20
  }
});
