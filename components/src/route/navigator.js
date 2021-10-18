import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../home';
import Quiz from '../../quiz';
import Title from '../../title';
import { createAppContainer } from 'react-navigation';


const AppStack = createStackNavigator();
export default function Navigator(){

    return (
    <NavigationContainer>
    <AppStack.Navigator screenOptions={{ headerShown: true }} >
    <AppStack.Screen name="Home" component={Home}} />
    <AppStack.Screen name="Quiz" component={Quiz} />
    <AppStack.Screen name="Title" component={Title} />
    </AppStack.Navigator>

    </NavigationContainer>
    );
}

export default createAppContainer(navigator);