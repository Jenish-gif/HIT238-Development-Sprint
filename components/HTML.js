
import React, { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const HTML = ({navigation}) => {
    const [questions, setQuestions] = useState();
   
  return (
       <View style={styles.container}>

      <View style={styles.question}>
          <Text style={styles.questionName}> 
              Q1. What is HTML?
          </Text>
      </View>

      <View style={styles.answer}>
        <TouchableOpacity style={styles.answerBox}>       
            <Text style={styles.answerName}>Desktop Application</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.answerBox}>       
            <Text style={styles.answerName} >Programming Language</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.answerBox}>       
            <Text style={styles.answerName}>Mobile Application</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.answerBox} >       
            <Text style={styles.answerName}>Mark's Language</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.Bottom}>
      <TouchableOpacity style={styles.button}>       
            <Text style={styles.buttonText}>SKIP</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>       
            <Text  style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
        

      </View>

    </View>
   
  );
}

export default HTML

const styles = StyleSheet.create({

    container:{
      padding: 15,
      height: '100%', 
    },

    question:{
        marginVertical: 20,
        fontSize: 25,
        textAlign: "left",
        backgroundColor: "#95d5b2",
        padding: 20,
        borderColor: "white",
        borderWidth: 2,
    },

    answer:{
      marginVertical: 15,
      flex: 1,
      paddingLeft: 10,
    },

    Bottom:{    
        fontSize: 20, 
        justifyContent:"space-between",
        flexDirection: "row",
        paddingBottom: 10,
    },

    button:{
        backgroundColor: "#427aa1",
        padding: 15,
        borderRadius: 15,
        alignItems: "center",
    },

    buttonText:{    
        fontSize: 20,  
        fontWeight: '600',
        color: 'white',
    },

    questionName:{
        fontSize: 20,

    } ,

    answerBox:{
        borderRadius:15,
        backgroundColor: '#2d6a4f',
        marginVertical: 10,
        padding: 15,
    },

    answerName:{
        fontSize: 20,
        color: 'white',
        fontWeight: '500',
    },

});