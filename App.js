import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home.js';
import { useFonts } from 'expo-font';
import Navigator from './routes/homeStack.js';





export default function App() {
  let [fontsLoaded] = useFonts({
     'poppins-light': require('./assets/fonts/Poppins-Light.ttf'),
          'poppins-medium': require('./assets/fonts/Poppins-Medium.ttf'),
          'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf')
   });
if(fontsLoaded){
  return (
   <Navigator/>
  );
  }else{
    return null;
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
