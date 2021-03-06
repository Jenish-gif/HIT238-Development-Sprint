import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';

const QuizJ = ({navigation}) => {
  return (
       <View style={styles.container}>

      <View style={styles.question}>
          <Text style={styles.questionName}> 
              Q11. An HTML program is saved by using the ____ extension.
          </Text>
      </View>

      <View style={styles.answer}>
        <TouchableOpacity style={styles.answerBox} onPress={()=>alert('Wrong Answer. Try Again')}>        
            <Text style={styles.answerName}>.htl</Text>
        </TouchableOpacity>    

        <TouchableOpacity style={styles.answerBox} onPress={()=>alert('Wrong Answer. Try Again')}>       
            <Text style={styles.answerName} >.htm</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.answerBox} onPress={()=>alert('Wrong Answer. Try Again')}>       
            <Text style={styles.answerName}>.hmtl</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.answerBox} onPress={()=>navigation.navigate('QuizK')}>         
            <Text style={styles.answerName}>.html</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.Bottom}>

        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('QuizK')}>   
            <Text  style={styles.buttonText}>SKIP</Text>
        </TouchableOpacity>

      </View>

    </View>
   
  );
}


export default QuizJ

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
        position: 'absolute',
        bottom:30,
        right:50,

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