import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';

import CepFinder from './src/Components/CepFinder';
import CepFound from './src/Components/CepFound';

export default function App() {

  const [cepFound, setCepFound] = useState('')
  const {cep, localidade, uf, bairro, logradouro, ddd, ibge, complemento} = cepFound
  const [cepFoundData, setCepData] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const cepData = [
        {id: 0, label: 'City', value: localidade},
        {id: 1, label: 'State/Province', value: uf},
        {id: 2, label: 'District', value: bairro},
        {id: 3, label: 'Street', value: logradouro},
        {id: 4, label: 'IBGE code', value: ibge},
        {id: 5, label: 'DDD', value: ddd},
      ]

    setCepData(cepData)
  }, [cepFound])

  const load = () => {
    return (
      <View style={styles.load}>
        <ActivityIndicator size="large" color="#32e4a3" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View>
        <CepFinder cepData={setCepFound} setLoading={setLoading}/>
        { loading ? load() : <CepFound cep={cep} cepFoundData={cepFoundData}/> }
      </View>
      <View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            CEP Finder developed by 
            <TouchableOpacity onPress={() => console.log("Hi, I'm Isaac")}>
              <Text style={styles.footerLink}>@isaac_tcg</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: "space-between"
  },
  load: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#111',
    justifyContent: "center",
    alignItems: "center"
  },
  footerText: {
    color: '#ddd',
    fontSize: 15
  },
  footerLink: {
    color: '#32e4a3',
    fontWeight: 'bold',
    marginLeft: 5
  }
})
