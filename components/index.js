import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';
import Quiz from './quiz';
import Title from './title';
import result from './result';
import Profile from './profile';
import Score from './score';
import Test from './Test';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Login Page" component={Title} />
    <Stack.Screen name="Home" component={Home}/>
    <Stack.Screen name="Quiz" component={Quiz} />
    <Stack.Screen name="Result" component={result} />

    <Stack.Screen name="Profile" component={Profile}/>
    <Stack.Screen name="Score" component={Score}/>
    <Stack.Screen name="Test" component={Test}/>

      </Stack.Navigator>
  );
}

export default MyStack;