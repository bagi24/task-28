import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';

const CameraScreen = ({ navigation }) => {
  const [cameraType, setCameraType] = useState(RNCamera.Constants.Type.back);
  const cameraRef = useRef(null);

  const takePhoto = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      navigation.navigate('PhotoUpload', { photoData: data });
    }
  };

  const switchCamera = () => {
    setCameraType(
      cameraType === RNCamera.Constants.Type.back
        ? RNCamera.Constants.Type.front
        : RNCamera.Constants.Type.back
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <RNCamera
        ref={cameraRef}
        style={{ flex: 1 }}
        type={cameraType}
        captureAudio={false}
      />
      <View style={{ flex: 0.1, flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity onPress={switchCamera}>
          <Text>Switch Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={takePhoto}>
          <Text>Take Photo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CameraScreen;