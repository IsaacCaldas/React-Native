import { View, Text, Image } from 'react-native';

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{
          width: '100%',
          height: 85,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 30,
      }}>
        <Image
          source={require('../assets/images/user.png')}
          style={{
            width: 50,
            height: 50
          }}
        />
        <Text style={{color: '111', fontSize: 17, marginTop: 10}}>
          Welcome!
        </Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}