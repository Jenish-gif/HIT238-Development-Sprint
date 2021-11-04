import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';
import Title from './title';
import result from './result';
import Profile from './profile';
import Score from './score';
import Test from './Test';
import About from './about';
import Contact from './contact';
import Development from './development';
import Quiz from './quiz';
import QuizA from './src/QuizQuestionHTML/QueA';
import QuizB from './src/QuizQuestionHTML/QueB';
import QuizC from './src/QuizQuestionHTML/QueC';
import QuizD from './src/QuizQuestionHTML/QueD';
import QuizE from './src/QuizQuestionHTML/QueE';
import QuizF from './src/QuizQuestionHTML/QueF';
import QuizG from './src/QuizQuestionHTML/QueG';
import QuizH from './src/QuizQuestionHTML/QueH';
import QuizI from './src/QuizQuestionHTML/QueI';
import QuizJ from './src/QuizQuestionHTML/QueJ';
import QuizK from './src/QuizQuestionHTML/QueK';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Login Page" component={Title} />
    <Stack.Screen name="Home" component={Home}/>  
    <Stack.Screen name="Result" component={result} />
    <Stack.Screen name="Profile" component={Profile}/>
    <Stack.Screen name="About" component={About}/>
    <Stack.Screen name="Contact" component={Contact}/>
    <Stack.Screen name="Score" component={Score}/>
    <Stack.Screen name="Test" component={Test}/>
    <Stack.Screen name="Quiz" component={Quiz}/>
    <Stack.Screen name="Development" component={Development}/>


    <Stack.Screen name="QuizA" component={QuizA}/>
    <Stack.Screen name="QuizB" component={QuizB}/>
    <Stack.Screen name="QuizC" component={QuizC}/>
    <Stack.Screen name="QuizD" component={QuizD}/>
    <Stack.Screen name="QuizE" component={QuizE}/>
    <Stack.Screen name="QuizF" component={QuizF}/>
    <Stack.Screen name="QuizG" component={QuizG}/>
    <Stack.Screen name="QuizH" component={QuizH}/>
    <Stack.Screen name="QuizI" component={QuizI}/>
    <Stack.Screen name="QuizJ" component={QuizJ}/>
    <Stack.Screen name="QuizK" component={QuizK}/>

  
</Stack.Navigator>
  );
}

export default MyStack;