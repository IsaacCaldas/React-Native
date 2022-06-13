import { useEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Row, CashComing, CashText } from '../../styles/styleds'

import AntDesign from 'react-native-vector-icons/AntDesign'

export default function History({data, deleteMode}) {

  const [value_formatted, setValue] = useState()

  useEffect(()=>{
    formatValue()
  },[])

  function formatValue(){
    let balance_format = (data.value / 100).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    let index = balance_format.lastIndexOf('.')
    if (index >= 0) {
      balance_format = balance_format.substring(0, index) + ',' + balance_format.substring(index + 1)
    }
    setValue(balance_format)
  }

  function leftDeleteButton() {
    if (data.type == 1) {
      return (
        <View style={{top: '8px', left: '10px', zIndex: 100}}>
          <AntDesign
            name="closecircle"
            size={16}
            color="#eee"
            onPress={() => console.log('1')}
          />
        </View>
      )
    }
  }

  function rightDeleteButton() {
    if (data.type == 2) {
      return (
        <View style={{top: '8px', right: '10px', zIndex: 100}}>
          <AntDesign
            name="closecircle"
            size={16}
            color="#eee"
            onPress={() => console.log('1')}
          />
        </View>
      )
    }
  }

  return (
    <Row end={data.type == 2 && true} style={{position: 'relative'}}>
      { deleteMode && leftDeleteButton() }
      <CashComing 
        borderRight={data.type == 1 && 20}
        borderLeft={data.type == 2 && 20}
        borderColor={data.type == 1 ? '#64c479' : '#ad4940'}
        bgColor={data.type == 1 ? '#2aa444' : '#8a251c'}
      >
        {data.type == 1 ?
          <>
            <Text style={styles.historyText}>{data.date}</Text>
            <View>
              <CashText>R$ {value_formatted}</CashText>
              <Text style={styles.historyText}>{data.type == 1 ? 'Incoming' : 'Outcoming'}</Text>
            </View>
          </>
          :
          <>
            <View>
              <CashText>R$ {value_formatted}</CashText>
              <Text style={styles.historyText}>{data.type == 1 ? 'Incoming' : 'Outcoming'}</Text>
            </View>
            <Text style={styles.historyText}>{data.date}</Text>
          </>
        }
      </CashComing>
      { deleteMode && rightDeleteButton() }
    </Row>
  )
}

const styles = StyleSheet.create({
  historyText: {
    fontSize: 14,
    color: '#ddd'
  }
})  