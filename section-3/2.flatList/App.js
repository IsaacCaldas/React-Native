import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {

  const pizzas = [
    { id: 0, name: 'Margherita', price: '20,00' },
    { id: 1, name: 'Capricciosa', price: '49,99' },
    { id: 2, name: 'Quattro Stagioni', price: '54,50' },
    { id: 3, name: 'Calzone', price: '33,25' },
    { id: 4, name: 'Quattro Formaggi', price: '43,55' },
    { id: 5, name: 'Pizza Bianca', price: '27,50' },
    { id: 6, name: 'Mussarela', price: '24,99' },
    { id: 7, name: 'Pizza Prosciutto', price: '30,00' },
    { id: 8, name: 'Pizza Prosciutto e Funghi', price: '64,50' },
    { id: 9, name: 'Pizza Quattro Stagioni', price: '49,99' },
  ];

  const [pizza_id, setPizzaId] = useState('');
  const [selectedPizza, setSelectedPizza] = useState()

  useEffect(() => {
    pizzas.map(pizza => {
      if (pizza.id === pizza_id) {
        setSelectedPizza(pizza)
      }
    })
  }, [pizza_id])

  const pizzaChoosed = () => {
    return (
      <>
        <Text style={styles.pizzas}>Você escolheu: {selectedPizza.name}</Text>
        <Text style={styles.pizzas}>R$ {selectedPizza.price}</Text>
      </>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Menu de Pizza</Text>

      <Picker 
        selectedValue={selectedPizza}
        onValueChange={(itemValue, itemIndex) => setPizzaId(itemIndex)}>
      >
        {pizzas.map(pizza => <Picker.Item label={pizza.name} value={pizza.id} key={pizza.id} /> )}
      </Picker>

      {selectedPizza !== undefined ? pizzaChoosed() : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  logo: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  pizzas: {
    marginTop: 15,
    fontSize: 20,
    textAlign: 'center'
  }
});
