import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps';

export default function App() {

  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [markers, setMarkers] = useState([
    { key: 1, latitude: 37.78825, longitude: -122.4324, pinColor: `#${Math.floor(Math.random()*16777215).toString(16)}` },
    { key: 2, latitude: 37.78825, longitude: -122.4100, pinColor: `#${Math.floor(Math.random()*16777215).toString(16)}` },
    { key: 3, latitude: 37.78810, longitude: -122.4320, pinColor: `#${Math.floor(Math.random()*16777215).toString(16)}` },
  ]);

  const [latiLongi, setLatiLongi] = useState([])

  const moveMap = (latitude, longitude) => {
    setRegion({
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  }

  return (
    <View style={styles.container}>
      <Text>MapApp</Text>
      <View style={{flexDirection: 'row'}}>
        <Button title='SP' style={{margin:4}}  onPress={() => moveMap(-23.5492243, -46.5813785)}/>
        <Button title='DF' style={{margin:4}} onPress={() => moveMap(-15.8080373, -47.8750231)}/>
      </View>
      <Text>{[latiLongi[0],latiLongi[1]]}</Text>
      <MapView 
        onPress={(e) => [ setMarkers([...markers, {key: markers.length + 1, latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude, pinColor: `#${Math.floor(Math.random()*16777215).toString(16)}`}]), moveMap(e.nativeEvent.coordinate.latitude, e.nativeEvent.coordinate.longitude)]}
        mapType='standard'
        style={styles.map} 
        region={region} 
      >
        {
          markers.map(marker => (
            <Marker
              key={marker.key}
              coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
              title={'Marker Title'}
              description={'Marker Description'}
            />))
        }
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '90%',
    marginTop: 20,
  },
});
