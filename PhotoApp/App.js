import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera, CameraType } from 'expo-camera';

export default function App() {

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);

  const [previewVisible, setPreviewVisible] = useState(false)
  const [capturedImage, setCapturedImage] = useState(null)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  async function takePicture() {
    console.log("hi")
    const photo = await camera.takePictureAsync()
    console.log(photo)
    setPreviewVisible(true)
    setCapturedImage(photo)
  }

  return (
    <View style={styles.container}>
      {previewVisible && capturedImage ? 
        <CameraPreview photo={capturedImage} />
      :
        <Camera style={styles.camera}>
          <View style={styles.btnArea}>
            <TouchableOpacity
            style={styles.btn}
            onPress={() => console.log('oi')}
            >
              <Text style={styles.btnFlipText}>Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.takeBtn}
            onPress={() => takePicture()}
            >
              <Text style={styles.btnFlipText}></Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              setType(type === CameraType.back ? CameraType.front : CameraType.back);
            }}>
              <Text style={styles.btnFlipText}>Flip</Text>
            </TouchableOpacity>
          </View>
        </Camera>
      }
    </View>
  );
}

const CameraPreview = ({photo}) => {
  console.log('sdsfds', photo)
  return (
    <View
      style={{
        backgroundColor: 'transparent',
        flex: 1,
        width: '100%',
        height: '100%'
      }}
    >
      <ImageBackground
        source={{uri: photo && photo.uri}}
        style={{
          flex: 1
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  camera: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  btnArea: {
    width: '100%',
    height: 80,
    backgroundColor: "#111",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  takeBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#eee',
    borderWidth: 3,
    borderColor: '#aaa',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    width: 80,
    height: 40,
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30
  },
  btnFlipText: {
    fontSize: 14,
    color: '#43aaa3',
    fontWeight: 'bold'
  }
})