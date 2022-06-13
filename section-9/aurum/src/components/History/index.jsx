import { StyleSheet, View, Text } from 'react-native'
import { Row, CashComing, CashText } from '../../styles/styleds'

import AntDesign from 'react-native-vector-icons/AntDesign'

export default function History({data, deleteMode}) {

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
              <Text style={styles.cash_coming}>{data.type == 1 ? 'Incoming' : 'Outcoming'}</Text>
              <CashText>R$ 10,00</CashText>
            </>
          :
            <>
              <CashText>R$ 10,00</CashText>
              <Text style={styles.cash_coming}>{data.type == 1 ? 'Incoming' : 'Outcoming'}</Text>
            </>
        }
      </CashComing>
      { deleteMode && rightDeleteButton() }
    </Row>
  )
}

const styles = StyleSheet.create({
  cash_coming: {
    fontSize: 14,
    color: '#ddd'
  }
})  