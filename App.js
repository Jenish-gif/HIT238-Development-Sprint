import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import MyStack from './components';


export default function App() {
  return (
    <View style={styles.container}>
    <Text style={styles.AppName}>QuiCo</Text> 
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    position: "absolute", 
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#95d5b2",
  },
AppName:{
    fontSize: 60,
    textAlign: "center",
    fontWeight: '800',
    backgroundColor: "#40916c",
    paddingTop: 40,
    paddingBottom: 10,
    },
});
