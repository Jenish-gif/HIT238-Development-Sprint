import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Stack } from 'react-native-screens';
import Home from './home';
import Quiz from './quiz';
import Title from './title';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="Title" component={Title} />
    
    </Stack.Navigator>
  );
}

export default MyStack;