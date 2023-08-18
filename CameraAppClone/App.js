import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CameraScreen from './assets/CameraScreen';
import PhotoUploadScreen from './assets/PhotoUploadScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Camera">
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="PhotoUpload" component={PhotoUploadScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;





