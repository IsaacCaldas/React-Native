import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Sign() {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity 
      style={styles.btn}
      onPress={() => navigation.navigate('SignIn')}
      > 
        <Text style={styles.btnTxt}>SignIn</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={styles.btn}
      onPress={() => navigation.navigate('SignUp')}
      > 
        <Text style={styles.btnTxt}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  btn: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    padding: 5,
    backgroundColor: '#a1f33a',
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTxt: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold'
  }
});
