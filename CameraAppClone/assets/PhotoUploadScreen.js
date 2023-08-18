import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import axios from 'axios';

const PhotoUploadScreen = ({ route }) => {
  const { photoData } = route.params;

  const uploadPhoto = async () => {
    try {
      // Upload the photo using an API endpoint
      const response = await axios.post('YOUR_UPLOAD_API_URL', {
        photo: photoData.base64,
      });
      console.log('Photo uploaded:', response.data);
    } catch (error) {
      console.error('Error uploading photo:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={{ uri: photoData.uri }} style={{ width: 300, height: 400 }} />
      <TouchableOpacity onPress={uploadPhoto}>
        <Text>Upload Photo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PhotoUploadScreen;