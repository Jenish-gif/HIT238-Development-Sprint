import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';
import Quiz from './quiz';
import Title from './title';
import result from './result';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Login Page" component={Title} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Quiz" component={Quiz} />
    <Stack.Screen name="Result" component={result} />
      </Stack.Navigator>
  );
}

export default MyStack;