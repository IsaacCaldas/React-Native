import { useState, useContext, useEffect } from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native'
import { Content, Section, Title, CashHistory } from '../../styles/styleds'

import { format } from 'date-fns'
import firebase from '../../services/firebase_connection'
import { AuthContext } from '../../contexts/auth'

import Header from '../../components/Header'
import History from '../../components/History'

export default function Home() {

  const { user } = useContext(AuthContext)
  const uid = user && user.uid

  const [load, setLoad] = useState()
  const [deleteMode, setDeleteMode] = useState(false)

  const [cash_history, setHistory] = useState()
  const [balance, setBalance] = useState()

  useEffect(() => {
    fetchUserData()
  }, [])

  async function fetchUserData(){
    await firebase.database().ref('users').child(uid).on('value', (snapshot) => {      
      let balance_format = (snapshot.val().balance / 100).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
      let index = balance_format.lastIndexOf('.')
      if (index >= 0) {
        balance_format = balance_format.substring(0, index) + ',' + balance_format.substring(index + 1)
      }
      setBalance(balance_format)
    })

    await firebase.database().ref('user_cash_history').child(uid)
      .on('value', (snapshot) => {
        setHistory([])

        snapshot.forEach((item) => {
          let history_item = {
            key: item.key,
            type: item.val().type,
            value: item.val().value,
            date: item.val().date
          }
          setHistory(state => [...state, history_item].reverse())
        })
      })
  }

  async function handleDelete(data) {
    await firebase.database().ref('user_cash_history')
      .child(uid).child(data.key).remove().then(async () => {
        let user = firebase.database().ref('users').child(uid)
        
        await user.once('value').then((snapshot) => {
          let balance = parseInt(snapshot.val().balance)
          data.type == '1' ? balance -= data.value : balance += data.value
    
          user.child('balance').set(balance)
        }).catch((error) => {
          alert('Internal error server')
          return
        })
      }).catch((error) => {
        alert('Internal error server')
        return
      })
  }

  async function handleDeleteAll() {
    await firebase.database().ref('user_cash_history')
      .child(uid).remove().then(async () => {
        await firebase.database().ref('users').child(uid).child('balance').set(0)
      }).catch((error) => {
        alert('Internal error server')
      })
  }
  
  return (
    <Content>
      <Header/>
      <Section>
        <View>
          <Text style={styles.name}>{user.name} balance</Text>
          <Title>R$ {balance || '0,00'}</Title>
        </View>
        <TouchableOpacity style={styles.btnEdit} onPress={() => setDeleteMode(!deleteMode)}>
          <Text style={styles.cashHistoryText}>Cash History</Text>
          {cash_history && <Text style={styles.edit}>{deleteMode ? 'Cancel' : 'Edit'}</Text>}
        </TouchableOpacity>
        <CashHistory>
          { deleteMode && 
            <TouchableOpacity 
              style={styles.delete}
              onPress={() => handleDeleteAll()}  
            >
              <Text style={styles.deleteText}>Delete all</Text>
            </TouchableOpacity>
          }
          <FlatList 
            keyExtractor={(item) => item.key}
            showsHorizontalScrollIndicator={false}
            data={cash_history}
            renderItem={({item}) => <History data={item} deleteMode={deleteMode} deleteItem={handleDelete} />}
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
    justifyContent: 'space-between',
  },
  cashHistoryText: {
    fontSize: 16,
    color: '#2aa444',
    marginLeft: 10,
    marginBottom: -10
  },
  edit: {
    fontSize: 16,
    color: '#ddd',
    marginRight: 10,
    marginBottom: -10,
    fontWeight: 'bold'
  },
  delete: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 5
  },
  deleteText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'red'
  }
})  