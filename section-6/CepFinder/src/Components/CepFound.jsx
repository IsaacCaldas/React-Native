import { StyleSheet, Text, View } from 'react-native';

export default function CepFound({cep, cepFoundData}) {

  return (
    <>
      {cep && 
        <View style={styles.cepFoundArea}>
          <View style={styles.cepFound}>
            <View style={styles.boxHeader}>
              <Text style={{color: "#32e4a3", fontSize: 18, fontWeight: "bold"}}>Cep Found - {cep}</Text>
            </View>
            <View>
              { cepFoundData.map(attr => {
                  if(attr.value){
                    return (
                      <View style={styles.attrArea} key={attr.id}>
                        <Text style={styles.attrLabel}>{attr.label}</Text>
                        <Text style={styles.attrValue}>{attr.value}</Text>
                      </View>
                    )
                  }
                })
              }
            </View>
          </View>
        </View>
      }
    </>
  )
}

const styles = StyleSheet.create({
  cepFoundArea: {
    flex: 1,
    alignItems: 'center'
  },
  cepFound: {
    width: "95%",
    height: "auto",
    backgroundColor: '#444',
    borderRadius: 5,
    padding: 10,
  },
  boxHeader: {
    backgroundColor: '#555',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  attrArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingBottom: 5,
    borderBottomColor: '#292929',
    borderBottomWidth: 1
  },
  attrLabel: {
    color: '#eee',
    fontSize: 16,
    marginRight: 10
  },
  attrValue: {
    color: '#32e4a3',
    fontSize: 14,
    fontWeight: 'bold'
  }
});
