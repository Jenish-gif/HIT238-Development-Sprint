import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';
import Quiz from './quiz';
import result from './result';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="quiz" component={Quiz} />
      <Stack.Screen name="result" component={result} />

    </Stack.Navigator>
  );
}
export default MyStack;