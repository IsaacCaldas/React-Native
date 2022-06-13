import { useState, useContext } from 'react'
import { StyleSheet, View, Text, FlatList, ActivityIndicator, Touchable, TouchableOpacity } from 'react-native'

import { Content, Section, Title, CashHistory } from '../../styles/styleds'
import Header from '../../components/Header'
import { AuthContext } from '../../contexts/auth'
import History from '../../components/History'

export default function Home() {

  const { user } = useContext(AuthContext)

  const [load, setLoad] = useState()
  const [deleteMode, setDeleteMode] = useState(false)

  const cash_history = [
    { id: 0, value: 10000, type: 1},
    { id: 1, value: 14030, type: 1},
    { id: 2, value: 100110, type: 2},
    { id: 3, value: 2030001, type: 1},
    { id: 4, value: 1000, type: 2},
  ]

  return (
    <Content>
      <Header/>
      <Section>
        <View>
          <Text style={styles.name}>{user.name} balance</Text>
          <Title>R$ {user.balance || '0,00'}</Title>
        </View>
        <TouchableOpacity style={styles.btnEdit} onPress={() => setDeleteMode(!deleteMode)}>
          <Text style={styles.edit}>{deleteMode ? 'Cancel' : 'Edit'}</Text>
        </TouchableOpacity>
        <CashHistory>
          <FlatList 
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            data={cash_history}
            renderItem={({item}) => <History data={item} deleteMode={deleteMode}/>}
          />
        </CashHistory>
      </Section>
    </Content>
  )
}

const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    color: '#ddd'
  },
  btnEdit: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  edit: {
    fontSize: 16,
    color: '#ddd',
    marginRight: 10,
    marginBottom: -10
  }
})  