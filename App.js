import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/home';
import Quiz from './components/quiz';
import Result from './components/result';
import Title from './components/title';
import Form from './components/form';

export default function App() {
  return (
    <View>
      <Title/>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingTop: 90,
    paddingHorizontal: 16
  }
});
